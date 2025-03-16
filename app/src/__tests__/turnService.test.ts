import { getNumberOfDaysFromStartOfYear, getWho } from './../turnService';
import { Who } from './../domain';

describe('getNumberOfDaysFromStartOfYear', () => {
  it('should return 0 for January 1st', () => {
    const date = new Date('2023-01-01');
    const result = getNumberOfDaysFromStartOfYear(date);
    expect(result).toBe(0);
  });

  it('should return 31 for February', () => {
    const date = new Date('2023-02-01');
    const result = getNumberOfDaysFromStartOfYear(date);
    expect(result).toBe(31);
  });

  it('should return 59 for March 1st in a non-leap year', () => {
    const date = new Date('2023-03-01');
    const result = getNumberOfDaysFromStartOfYear(date);
    expect(result).toBe(59);
  });

  it('should return 60 for March 1st in a leap year', () => {
    const date = new Date('2024-03-01');
    const result = getNumberOfDaysFromStartOfYear(date);
    expect(result).toBe(60);
  });
});

describe('getWho', () => {
    it('should return mom for January 1st', () => {
        const date = new Date('2023-01-01');
        const result = getWho(date);
        expect(result).toBe("mamma");
    });
    
    it('should return dad for January 2nd', () => {
        const date = new Date('2023-01-02');
        const result = getWho(date);
        expect(result).toBe('papà');
    });
    
    it('should return mom for January 3rd', () => {
        const date = new Date('2023-01-03');
        const result = getWho(date);
        expect(result).toBe("mamma");
    });

    it('should return dad for January 4th', () => {
        const date = new Date('2023-01-04');
        const result = getWho(date);
        expect(result).toBe("papà");
    });
});
