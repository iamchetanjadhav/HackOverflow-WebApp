import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { generateTicketId } from "@/lib/ticket";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { participant_id, team_id } = body;

        if (!participant_id || !team_id) {
            return NextResponse.json(
                { error: "Missing participant_id or team_id" },
                { status: 400 }
            );
        }

        const ref = db.collection("participants").doc(participant_id);
        const snap = await ref.get();

        if (!snap.exists) {
            return NextResponse.json(
                { error: "Invalid participant" },
                { status: 404 }
            );
        }

        const data = snap.data();

        if (!data) {
            return NextResponse.json(
                { error: "Invalid participant data" },
                { status: 500 }
            );
        }

        // 🔁 Retrieval check (already checked in)
        if (data?.check_in_status === true) {
            return NextResponse.json({
                alreadyCheckedIn: true,
                ticket: {
                    ticket_id: data.ticket_id,
                    full_name: data.full_name,
                    team_name: data.team_name,
                    team_id: data.team_id,
                    table_number: data.table_number,
                    wifi_creds: data.wifi_creds,
                },
            });
        }

        // 🔐 Verification
        if (data?.team_id !== team_id) {
            return NextResponse.json(
                { error: "Verification failed" },
                { status: 403 }
            );
        }

        // ✅ First-time check-in
        const ticketId = generateTicketId(participant_id);

        await ref.update({
            check_in_status: true,
            ticket_id: ticketId,
            checked_in_at: new Date(),
        });

        return NextResponse.json({
            success: true,
            ticket: {
                ticket_id: ticketId,
                full_name: data.full_name,
                team_name: data.team_name,
                team_id: data.team_id,
                table_number: data.table_number,
                wifi_creds: data.wifi_creds,
            },
        });
    } catch (err) {
        console.error("Check-in error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
