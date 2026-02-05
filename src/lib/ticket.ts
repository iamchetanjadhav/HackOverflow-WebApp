export function generateTicketId(participantId: string) {
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `HOF-${participantId}-${rand}`;
}
