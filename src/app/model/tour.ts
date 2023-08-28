import { Airport } from "./airport";
import {City} from "./city";
import { Hotel } from "./hotel";

export class Tour {

    id!: string;
    departureDate!: string;
    fromCity!: City;
    fromAirport!: Airport;
    toCity!: City;
    toAirport!: Airport;
    hotel!: Hotel;
    returnDate!: string;
    numberOfDays!: number;
    typeOfBoard!: string;
    priceForAdult!: number;
    priceForKid!: number;
    isPromoted!: boolean;
    numberOfAdults!: number;
    numberOfKids!: number;
}
