import { getDaysInMonth } from '../calendarTabService';

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
