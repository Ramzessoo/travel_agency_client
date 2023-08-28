import { Component, OnInit } from '@angular/core';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { TourList } from '../tour-list';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-promoted',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})

export class TourPromotedComponent extends TourList implements OnInit {

  constructor(private tourService: TourService, tourOrderService: TourOrderService) {
    super(tourOrderService);
    this.title="Best Offers";
  }

  ngOnInit() {
    this.tourService.findPromoted().subscribe((data: Tour[]) => {
      this.tours = data;
    });
  }
}
