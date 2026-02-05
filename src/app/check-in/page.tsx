"use client";

import { useEffect, useState } from "react";
import TicketCard from "@/components/TicketCard";

export default function CheckInPage() {
    const [participantId, setParticipantId] = useState("");
    const [teamId, setTeamId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [ticket, setTicket] = useState<any>(null);

    // 🔁 Auto-restore ticket
    useEffect(() => {
        const stored = sessionStorage.getItem("hackoverflow_ticket");
        if (stored) {
            setTicket(JSON.parse(stored));
        }
    }, []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch("/api/checkin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    participant_id: participantId.trim(),
                    team_id: teamId.trim(),
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Something went wrong");
                return;
            }

            setTicket(data.ticket);
            sessionStorage.setItem(
                "hackoverflow_ticket",
                JSON.stringify(data.ticket)
            );
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (ticket) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-black p-4">
                <TicketCard ticket={ticket} />
            </main>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-black p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-4 rounded-xl border border-white/10 bg-white/5 p-6"
            >
                <h1 className="text-2xl font-bold text-center text-white">
                    HackOverflow 4.0 Check-In
                </h1>

                <input
                    type="text"
                    placeholder="Participant ID"
                    value={participantId}
                    onChange={(e) => setParticipantId(e.target.value)}
                    required
                    className="w-full rounded-md bg-black/40 border border-white/10 p-3 text-white"
                />

                <input
                    type="text"
                    placeholder="Team ID"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                    required
                    className="w-full rounded-md bg-black/40 border border-white/10 p-3 text-white"
                />

                {error && (
                    <p className="text-sm text-red-400 text-center">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold py-3 disabled:opacity-50"
                >
                    {loading ? "Checking in…" : "Complete Check-In"}
                </button>
            </form>
        </main>
    );
}
