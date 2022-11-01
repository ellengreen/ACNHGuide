import { EventType } from "../enums/event-type";

export interface Event {
    monthInt: number,
    monthStr: string,
    eventType: EventType,
    name: string,
    dateArr: number[],
    dateStr: string,
    description: string,
    imagePath: string
} 

// BIRTHDAYS??
