"use client";

import { motion } from "framer-motion";

export default function TicketCard({ ticket }: { ticket: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0F0F0F] via-[#1a1a1a] to-[#0F0F0F] shadow-2xl"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-yellow-500/10 to-purple-500/20 blur-2xl" />

            <div className="relative p-6 space-y-5 text-white">
                <h2 className="text-center text-2xl font-bold tracking-wide">
                    🎟 HackOverflow 4.0
                </h2>

                <div className="text-center font-mono text-lg bg-white/5 rounded-md py-2">
                    {ticket.ticket_id}
                </div>

                <div className="space-y-2 text-sm">
                    <p><span className="text-white/60">Name</span>: {ticket.full_name}</p>
                    <p><span className="text-white/60">Team</span>: {ticket.team_name}</p>
                    <p><span className="text-white/60">Team ID</span>: {ticket.team_id}</p>
                    <p><span className="text-white/60">Table</span>: {ticket.table_number}</p>
                    <p><span className="text-white/60">Wi-Fi</span>: {ticket.wifi_creds}</p>
                </div>

                <p className="text-xs text-center text-white/50">
                    Keep this screen open or take a screenshot
                </p>
            </div>
        </motion.div>
    );
}
