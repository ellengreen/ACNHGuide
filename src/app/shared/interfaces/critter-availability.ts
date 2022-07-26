export interface CritterAvailability {
    northernMonthString: string,
    southernMonthString: string,
    time: string,
    isAllDay: boolean | null,
    isAllYear: boolean,
    location: string,
    rarity: string,
    northernMonthArray: [string],
    southernMonthArray: [string],
    timeArray: [number]
}
