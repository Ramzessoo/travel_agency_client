import { Tour } from "./tour";

export class TourOrder {
    tour: Tour;

    constructor(private data: Tour){
        this.tour=data;
    }
}
