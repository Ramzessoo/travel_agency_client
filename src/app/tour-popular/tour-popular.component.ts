import { Component, OnInit } from '@angular/core';
import { Tour } from '../model/tour';
import { TourOrderService } from '../service/tour-order.service';
import { TourService } from '../service/tour-service.service';
import { TourList } from '../tour-list';

@Component({
  selector: 'app-tour-popular',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class TourPopularComponent extends TourList implements OnInit {

  constructor(private tourService: TourService, tourOrderService: TourOrderService) {
    super(tourOrderService);
    this.title="Popular offers";
  }

  ngOnInit() {
    this.tourService.findPopular().subscribe((data: Tour[]) => {
      this.tours = data;
    });
  }
}