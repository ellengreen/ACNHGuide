export interface CritterAvailability {
    location: string,
    rarity: string,
    availabilityArray: AvailabilityArray[],
    timesByMonth: {},
    months: string
}

export interface AvailabilityArray {
    months: string,
    time: string
}