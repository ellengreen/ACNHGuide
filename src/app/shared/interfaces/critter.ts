import { CritterAvailability } from "./critter-availability";

export interface Critter {
    id: number,
    name: string,
    north: CritterAvailability,
    south: CritterAvailability,
    shadow?: string | null,
    speed?: string | null,
    price: number,
    catchPhrase: string,
    museumPhrase?: string,
    imageURI: string,
    iconURI: string
}
