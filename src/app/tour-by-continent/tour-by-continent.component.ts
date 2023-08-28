import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { SearchResult } from '../search-result';
import { ContinentService } from '../service/continent.service';
import { Continent } from '../model/continent';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-by-continent',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class TourByContinentComponent extends SearchResult{

  constructor(private tourService: TourService, private continentService: ContinentService,private route: ActivatedRoute, tourOrderService: TourOrderService) {
    super(tourOrderService);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.continentService.findById(params.get('id')).subscribe((data: Continent) => {
        this.title="Search results for destination continent " + data.name;
      })

      this.tourService.findByContinent(params.get('id')).subscribe((data: Tour[]) => {
        this.tours = data;
      });
    })
  }
}
