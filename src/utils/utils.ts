export const formatDate = (date: Date): string => {
    const current = new Date(date);
    const year = current.getFullYear();
    const month = current.getMonth();
    const day = current.getDay();
    return `${year}-${month}-${day}`;
}