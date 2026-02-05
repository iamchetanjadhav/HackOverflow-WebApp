import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { generateTicketId } from "@/lib/ticket";

function normalizeTimestamp(ts: any) {
    if (!ts) return null;

    const seconds = ts.seconds ?? ts._seconds;
    const nanoseconds = ts.nanoseconds ?? ts._nanoseconds ?? 0;

    if (typeof seconds !== "number") return null;

    return { seconds, nanoseconds };
}

export async function POST(req: Request) {
    try {
        const { participant_id, team_id } = await req.json();

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

        if (data.check_in_status === true) {
            return NextResponse.json({
                alreadyCheckedIn: true,
                ticket: {
                    participant_id: data.participant_id ?? snap.id,
                    ticket_id: data.ticket_id,
                    full_name: data.full_name,
                    team_name: data.team_name,
                    team_id: data.team_id,
                    table_number: data.table_number,
                    wifi_creds: data.wifi_creds,
                    event_dates: data.event_dates ?? "",
                    room_no: data.room_no ?? "",
                    welcome_message: data.welcome_message ?? "",
                    checked_in_at: normalizeTimestamp(data.checked_in_at),
                },
            });
        }

        if (data.team_id !== team_id) {
            return NextResponse.json(
                { error: "Verification failed" },
                { status: 403 }
            );
        }

        const now = new Date();
        const ticketId = generateTicketId(participant_id);

        await ref.update({
            check_in_status: true,
            ticket_id: ticketId,
            checked_in_at: now,
        });

        return NextResponse.json({
            success: true,
            ticket: {
                participant_id: data.participant_id ?? snap.id,
                ticket_id: ticketId,
                full_name: data.full_name,
                team_name: data.team_name,
                team_id: data.team_id,
                table_number: data.table_number,
                wifi_creds: data.wifi_creds,
                event_dates: data.event_dates ?? "",
                room_no: data.room_no ?? "",
                welcome_message: data.welcome_message ?? "",
                checked_in_at: {
                    seconds: Math.floor(now.getTime() / 1000),
                    nanoseconds: 0,
                },
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
