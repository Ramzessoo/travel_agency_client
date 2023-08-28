import { Component } from '@angular/core';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { TourList } from '../tour-list';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-last-minute',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class TourLastMinuteComponent extends TourList{

  constructor(private tourService: TourService, tourOrderService: TourOrderService) {
    super(tourOrderService);
    this.title="Last minute";
  }

  ngOnInit() {
    this.tourService.findLastMinute().subscribe((data: Tour[]) => {
      this.tours = data;
    });
  }

}

