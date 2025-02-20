import { Colors } from "./colors";
import { Who } from "./domain";

export interface CustomStyle {
    container: {
        backgroundColor: string;
        borderColor?: string;
        borderWidth?: number;
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
        dates.push(new Date(Date.UTC(year, month, day)));
    }

    return dates;
}

export function getCustomStyle(who: Who, isToday: boolean): CustomStyle {
    const color: string = who === Who.DAD 
        ? Colors.blue
        : Colors.pink;
    
    const backgroundColor: string = who === Who.DAD
        ? Colors.lightBlue
        : Colors.lightPink;

    let customStyle: CustomStyle = {
        container: {
            backgroundColor: backgroundColor
        },
        text: {
            color: color,
            fontWeight: 'bold'
        }
    };

    if (isToday) {
        customStyle.container.borderColor = color;
        customStyle.container.borderWidth = 2;
    }

    return customStyle;
}

