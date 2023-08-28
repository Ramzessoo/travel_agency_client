import { City } from "./city";

export interface Hotel {
    id: string;
    city: City;
    standard: string;
    description: string;
    name: string;
}
