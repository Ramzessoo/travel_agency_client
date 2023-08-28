import { Component } from '@angular/core';
import { Tour } from '../model/tour';
import { TourList } from '../tour-list';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent extends TourList {

  constructor(tourOrderService: TourOrderService) {
    super(tourOrderService);
  }
}
