import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { SearchResult } from '../search-result';
import { CityService } from '../service/city.service';
import { City } from '../model/city';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-by-city',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class TourByCityComponent extends SearchResult{

  constructor(private tourService: TourService, private cityService: CityService, private route: ActivatedRoute, tourOrderService: TourOrderService) {
    super(tourOrderService);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.cityService.findById(params.get('id')).subscribe((data: City) => {
        this.title="Search results for destination city " + data.name;
      })

      this.tourService.findByCity(params.get('id')).subscribe((data: Tour[]) => {
        this.tours = data;
      });
    })
  }
}
