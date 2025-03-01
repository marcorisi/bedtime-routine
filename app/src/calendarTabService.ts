import { Colors } from "./colors";
import { Who } from "./domain";

export interface CustomStyle {
    container: {
        backgroundColor: string;
        borderColor?: string;
        borderWidth?: number;
        opacity: number;
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

export function getValidDatesForTheRoutine(today: Date, offset: number): Date[] {
    const dates: Date[] = [];
    const firstDate = new Date(today);
    const lastDate = new Date(today);
    firstDate.setDate(today.getDate() - offset);
    lastDate.setDate(today.getDate() + offset);

    for (let date = firstDate; date <= lastDate; date.setDate(date.getDate() + 1)) {
        dates.push(new Date(date));
    }

    return dates;
}

export function getCustomStyle(who: Who, isToday: boolean, isInThePast: boolean): CustomStyle {
    const color: string = who === Who.DAD 
        ? Colors.blue
        : Colors.pink;
    
    const backgroundColor: string = who === Who.DAD
        ? Colors.lightBlue
        : Colors.lightPink;

    let customStyle: CustomStyle = {
        container: {
            backgroundColor: backgroundColor,
            opacity: isInThePast ? 1 : 0.4
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

