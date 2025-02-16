
export function getDaysInMonth(month: number, year: number): Date[] {
    const firstDayOfTheNextMonth = new Date(year, month + 1, 0).getDate();
    const dates: Date[] = [];

    for (let day = 1; day <= firstDayOfTheNextMonth; day++) {
        dates.push(new Date(year, month, day));
    }

    return dates;
}

