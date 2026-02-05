"use client";

import { useEffect, useState } from "react";
import { BoardingPass } from "@/components/BoardingPass";

export default function CheckInPage() {
    const [participantId, setParticipantId] = useState("");
    const [teamId, setTeamId] = useState("");
    const [ticket, setTicket] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
                setError(data.error || "Check-in failed");
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
            <main className="min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden px-3 sm:px-4 py-6 sm:py-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
                    <span className="inline-block mb-3 rounded-full border border-[#FCB216]/30 bg-[#FCB216]/10 px-4 py-1 text-xs font-semibold tracking-wide text-[#FCB216]">
                        LIVE EVENT
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        Your Hackathon Pass
                    </h1>

                    <p className="mt-2 text-xs sm:text-sm text-white/60">
                        Keep this pass handy throughout the event. Show it at check-in and
                        for venue access.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[680px]">
                        <BoardingPass
                            participantName={ticket.full_name}
                            teamName={ticket.team_name}
                            participantId={ticket.participant_id}
                            ticketId={ticket.ticket_id}
                            teamId={ticket.team_id}
                            eventDates="March 15–17, 2026"
                            wifiSsid="HackOverflow_5G"
                            wifiPassword={ticket.wifi_creds}
                            roomNo="A-201"
                            tableNo={ticket.table_number}
                            welcomeMessage="Welcome to HackOverflow 4.0! We’re thrilled to have you join us for 48 hours of innovation, creativity, and collaboration. Let’s build something amazing 🚀"
                            checkedInAt={ticket.checked_in_at}
                            onBack={() => {
                                setTicket(null);
                                setParticipantId("");
                                setTeamId("");
                                setError(null);
                            }}
                        />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-1 sm:px-4">
                    {[
                        {
                            step: "01",
                            title: "Check In",
                            desc: "Show this pass at the registration desk upon arrival",
                        },
                        {
                            step: "02",
                            title: "Find Your Spot",
                            desc: "Head to your assigned room and table number",
                        },
                        {
                            step: "03",
                            title: "Connect",
                            desc: "Use the Wi-Fi credentials and start hacking",
                        },
                    ].map((s) => (
                        <div
                            key={s.step}
                            className="rounded-xl border border-white/10 bg-black/60 p-4 sm:p-5"
                        >
                            <span className="inline-block mb-2 rounded-full bg-[#E85D24]/15 px-3 py-1 text-xs font-semibold text-[#FCB216]">
                                {s.step}
                            </span>
                            <h3 className="text-lg font-semibold">{s.title}</h3>
                            <p className="mt-1 text-sm text-white/60">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        );
    }


    return (
        <main className="min-h-screen bg-black flex items-center justify-center overflow-x-hidden px-3 py-6">
            <div className="relative w-full max-w-md">
                {/* Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/30 via-yellow-400/10 to-purple-500/20 blur-xl" />

                <form
                    onSubmit={handleSubmit}
                    className="relative space-y-4 rounded-2xl border border-white/10 bg-black/70 p-5 sm:p-6 text-white shadow-2xl backdrop-blur"
                >
                    <h1 className="text-xl sm:text-2xl font-bold text-center tracking-wide">
                        HackOverflow 4.0 Check-In
                    </h1>

                    <input
                        type="text"
                        placeholder="Participant ID"
                        value={participantId}
                        onChange={(e) => setParticipantId(e.target.value)}
                        required
                        className="w-full rounded-md border border-white/10 bg-black/50 p-3 text-sm sm:text-base outline-none focus:border-orange-400"
                    />

                    <input
                        type="text"
                        placeholder="Team ID"
                        value={teamId}
                        onChange={(e) => setTeamId(e.target.value)}
                        required
                        className="w-full rounded-md border border-white/10 bg-black/50 p-3 text-sm sm:text-base outline-none focus:border-orange-400"
                    />

                    {error && (
                        <p className="text-sm text-red-400 text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 py-3 font-semibold text-black transition disabled:opacity-50"
                    >
                        {loading ? "Checking in…" : "Complete Check-In"}
                    </button>

                    <p className="text-xs text-center text-white/50">
                        Scan QR → Enter details → Get your ticket
                    </p>
                </form>
            </div>
        </main>
    );
}
