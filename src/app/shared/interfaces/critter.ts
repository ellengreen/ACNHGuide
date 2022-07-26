import { CritterAvailability } from "src/app/shared/interfaces/critter-availability";

export interface Critter {
    id: number,
    name: string,
    availability: CritterAvailability,
    shadow?: string | null,
    speed?: string | null,
    price: number,
    catchPhrase: string,
    museumPhrase: string,
    imageURI: string,
    iconURI: string
}
