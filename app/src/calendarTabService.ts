import { Colors } from "./colors";
import { Who } from "./domain";

export interface CustomStyle {
    container: {
        backgroundColor: string;
    };
    text: {
        color: string;
        fontWeight: string;
    };
}

export interface MarkedDates {
    [key: string]: {
      customStyles: CustomStyle
    }
}

export function getDaysInMonth(month: number, year: number): Date[] {
    const firstDayOfTheNextMonth = new Date(year, month + 1, 0).getDate();
    const dates: Date[] = [];

    for (let day = 1; day <= firstDayOfTheNextMonth; day++) {
        dates.push(new Date(year, month, day));
    }

    return dates;
}

export function getCustomStyle(who: Who): CustomStyle {
    const color: string = who === Who.DAD 
        ? Colors.blue
        : Colors.pink;
    
    const backgroundColor: string = who === Who.DAD
        ? Colors.lightBlue
        : Colors.lightPink;

    return {
        container: {
            backgroundColor: backgroundColor
        },
        text: {
            color: color,
            fontWeight: 'bold'
        }
    };
}

