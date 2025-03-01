import { getDaysInMonth, getValidDatesForTheRoutine } from '../calendarTabService';

describe('getDaysInMonth', () => {

    it('should return the right number for January 2025', () => {
        // Months are 0-based!!!
        const dates = getDaysInMonth(0, 2025);
        expect(dates.length).toBe(31);

        expect(dates[0].getDate()).toBe(1);
        expect(dates[0].getMonth()).toBe(0);
        expect(dates[0].getFullYear()).toBe(2025);
        
        expect(dates[30].getDate()).toBe(31);
        expect(dates[30].getMonth()).toBe(0);
        expect(dates[30].getFullYear()).toBe(2025);
    });

    it('should return the right number for February 2025', () => {
        // Months are 0-based!!!
        const dates = getDaysInMonth(1, 2025);
        expect(dates.length).toBe(28);

        expect(dates[0].getDate()).toBe(1);
        expect(dates[0].getMonth()).toBe(1);
        expect(dates[0].getFullYear()).toBe(2025);
        
        expect(dates[27].getDate()).toBe(28);
        expect(dates[27].getMonth()).toBe(1);
        expect(dates[27].getFullYear()).toBe(2025);
    });


    it('should return the correct number for a leap year', () => {
        // Months are 0-based!!!
        const dates = getDaysInMonth(1, 2024);
        expect(dates.length).toBe(29);

        expect(dates[0].getDate()).toBe(1);
        expect(dates[0].getMonth()).toBe(1);
        expect(dates[0].getFullYear()).toBe(2024);
        
        expect(dates[28].getDate()).toBe(29);
        expect(dates[28].getMonth()).toBe(1);
        expect(dates[28].getFullYear()).toBe(2024);
    });
});


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
