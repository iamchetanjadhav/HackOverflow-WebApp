"use client";

import { useState } from "react";
import {
    QrCode,
    Wifi,
    MapPin,
    Users,
    Sparkles,
    Copy,
    Check,
    Hash,
    Calendar,
} from "lucide-react";

interface BoardingPassProps {
    participantName: string;
    teamName: string;
    participantId: string;
    ticketId: string;
    teamId: string;
    eventDates: string;
    wifiSsid: string;
    wifiPassword: string;
    roomNo: string;
    tableNo: string;
    welcomeMessage: string;
    checkedInAt: string; // 🔥 from Firebase
    onBack: () => void;
}

export function BoardingPass({
    participantName,
    teamName,
    participantId,
    ticketId,
    teamId,
    eventDates,
    wifiSsid,
    wifiPassword,
    roomNo,
    tableNo,
    welcomeMessage,
    checkedInAt,
    onBack,
}: BoardingPassProps) {
    const [copied, setCopied] = useState<string | null>(null);

    function copy(text: string, key: string) {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 1500);
    }

    const formattedCheckInTime = new Date(checkedInAt).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E85D24]/25 via-[#FCB216]/10 to-[#63205F]/20 blur-xl" />

            <div className="relative rounded-2xl bg-[#0F0F0F] border border-white/10 text-white overflow-hidden">
                {/* Accent line */}
                <div className="h-[3px] bg-[#E85D24]" />

                {/* Header */}
                <div className="p-6 flex justify-between border-b border-dashed border-white/10">
                    <div>
                        <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#FCB216]">
                            <Sparkles className="w-4 h-4" />
                            Boarding Pass
                        </span>
                        <h1 className="text-2xl font-bold mt-1">HackOverflow 4.0</h1>
                        <p className="flex items-center gap-2 text-sm text-white/60 mt-1">
                            <MapPin className="w-4 h-4" />
                            PHCET Campus
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-3">
                        <QrCode className="w-10 h-10 text-black" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Participant + Team */}
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-white/50">
                                Participant Name
                            </p>
                            <h2 className="text-2xl font-bold">{participantName}</h2>
                        </div>

                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                            <Users className="w-4 h-4 text-[#E85D24]" />
                            <span className="font-semibold">{teamName}</span>
                        </div>
                    </div>

                    {/* IDs */}
                    <div className="grid grid-cols-3 gap-4">
                        <InfoCard icon={<Hash />} label="Participant ID" value={participantId}
                            copied={copied === "pid"} onCopy={() => copy(participantId, "pid")} />
                        <InfoCard icon={<Hash />} label="Ticket ID" value={ticketId}
                            copied={copied === "tid"} onCopy={() => copy(ticketId, "tid")} />
                        <InfoCard icon={<Hash />} label="Team ID" value={teamId}
                            copied={copied === "team"} onCopy={() => copy(teamId, "team")} />
                    </div>

                    {/* Dates / Room / Table */}
                    <div className="grid grid-cols-3 gap-4">
                        <DetailCard icon={<Calendar />} label="Event Dates" value={eventDates} />
                        <HighlightCard label="Room No" value={roomNo} />
                        <HighlightCard label="Table No" value={tableNo} />
                    </div>

                    {/* WiFi */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Wifi className="w-4 h-4 text-[#E85D24]" />
                            <span className="font-semibold">WiFi Credentials</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="text-xs uppercase text-white/50">Network</p>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono">{wifiSsid}</span>
                                    <CopyBtn copied={copied === "ssid"} onClick={() => copy(wifiSsid, "ssid")} />
                                </div>
                            </div>

                            <div>
                                <p className="text-xs uppercase text-white/50">Password</p>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono">{wifiPassword}</span>
                                    <CopyBtn copied={copied === "pwd"} onClick={() => copy(wifiPassword, "pwd")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Welcome */}
                    <div className="rounded-xl border border-[#E85D24]/30 bg-[#E85D24]/10 p-4">
                        <p className="text-xs uppercase tracking-wide text-[#FCB216] mb-1">
                            Welcome Message
                        </p>
                        <p className="text-sm">{welcomeMessage}</p>
                    </div>

                    {/* Back */}
                    <button
                        onClick={onBack}
                        className="w-full rounded-lg border border-white/20 py-2 hover:bg-white/10 transition"
                    >
                        ← Back to new check-in
                    </button>

                    <p className="text-xs text-center text-white/50">
                        Refreshing restores this ticket
                    </p>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 px-6 py-4 flex justify-between text-xs text-white/50">
                    <span>Checked in at {formattedCheckInTime}</span>
                    <span>VALID FOR EVENT DURATION</span>
                </div>
            </div>
        </div>
    );
}

/* ---------- Helper Components ---------- */

function InfoCard({ icon, label, value, copied, onCopy }: any) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex justify-between items-center mb-2 text-white/60">
                <span className="flex items-center gap-1 text-xs uppercase">
                    {icon}
                    {label}
                </span>
                <CopyBtn copied={copied} onClick={onCopy} />
            </div>
            <p className="font-mono font-semibold">{value}</p>
        </div>
    );
}

function DetailCard({ icon, label, value }: any) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <span className="flex items-center gap-1 text-xs uppercase text-white/60">
                {icon}
                {label}
            </span>
            <p className="mt-1 text-lg font-semibold">{value}</p>
        </div>
    );
}

function HighlightCard({ label, value }: any) {
    return (
        <div className="rounded-xl border border-[#E85D24]/40 bg-[#E85D24]/15 p-4 shadow-[0_0_20px_rgba(232,93,36,0.25)]">
            <span className="text-xs uppercase text-[#FCB216]">{label}</span>
            <p className="mt-1 text-lg font-semibold text-[#FCB216]">{value}</p>
        </div>
    );
}

function CopyBtn({ copied, onClick }: any) {
    return (
        <button onClick={onClick}>
            {copied ? (
                <Check className="w-3 h-3 text-[#FCB216]" />
            ) : (
                <Copy className="w-3 h-3 text-white/60" />
            )}
        </button>
    );
}
