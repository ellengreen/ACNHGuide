import { EventType } from "./event-type";

export interface Event {
    monthInt: number,
    monthStr: string,
    eventType?: EventType,
    name?: string,
    dateArr?: number[],
    dateStr?: string,
    noEvent?: boolean,
    description?: string // MAKE REQUIRED
} 