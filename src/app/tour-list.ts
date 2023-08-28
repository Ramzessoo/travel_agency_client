import { Tour } from "./model/tour";
import { TourOrderService } from "./service/tour-order.service";

export class TourList {
    tours: Tour[] = [];

    search: boolean = false;
    bought: boolean = false;
    boughtTour!: Tour;
    title: string = "";

    constructor(private tourOrderService: TourOrderService) { }

    onSubmit(tour: Tour) {

        this.tourOrderService.save(tour).subscribe(result => {
            this.bought = true;
            this.boughtTour = tour;
        });

    }

    closeBoughtAlert() {
        this.bought = false;
    }

    public show: number | undefined;

    clicked(index: number | undefined) {
        this.show = index;
    };

}
