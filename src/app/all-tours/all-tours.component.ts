import { Component, OnInit } from '@angular/core';
import { TourList } from '../tour-list';
import { TourOrderService } from '../service/tour-order.service';
import { TourService } from '../service/tour-service.service';
import { Tour } from '../model/tour';

@Component({
  selector: 'app-all-tours',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class AllToursComponent extends TourList implements OnInit{
  
  constructor(private tourService: TourService, tourOrderService: TourOrderService) {
    super(tourOrderService);
    this.title="All tours";
  }

  ngOnInit(): void {
    this.tourService.findAll().subscribe((data: Tour[]) => {
      this.tours = data;
    });
  }

}
