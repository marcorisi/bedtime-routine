import { getValidDatesForTheRoutine } from '../calendarTabService';


describe('getValidDatesForTheRoutine', () => {
    it('should return 3 dates with offset equal to 1', () => {
        const today = new Date();
        const dates = getValidDatesForTheRoutine(today, 1);
        expect(dates.length).toBe(3);

        const dateInTheMiddle = dates[1];
        expect(dateInTheMiddle.toDateString()).toBe(today.toDateString());
    });

    it('should return yesterday, today and tomorrow with offset equal to 1', () => {
        const today = new Date();
        const dates = getValidDatesForTheRoutine(today, 1);

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        expect(dates[0].toDateString()).toBe(yesterday.toDateString());

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        expect(dates[2].toDateString()).toBe(tomorrow.toDateString());
    });

    it('should return valid dates when overlapping years', () => {
        const today = new Date('2024-12-31');
        const dates = getValidDatesForTheRoutine(today, 2);

        expect(dates.length).toBe(5);
        expect(dates[0].toISOString().slice(0, 10)).toBe('2024-12-29');
        expect(dates[1].toISOString().slice(0, 10)).toBe('2024-12-30');
        expect(dates[2].toISOString().slice(0, 10)).toBe('2024-12-31');
        expect(dates[3].toISOString().slice(0, 10)).toBe('2025-01-01');
        expect(dates[4].toISOString().slice(0, 10)).toBe('2025-01-02');
    });
});
