import { Critter } from "../interfaces/critter";
import { Villager } from "../interfaces/villager";
import { CritterType } from "./critter-type.enum";
import { DatabaseTypes } from "./db-types.enum";

export type DataModes = CritterType | DatabaseTypes;
export type DataItemTypes = Critter | Villager;