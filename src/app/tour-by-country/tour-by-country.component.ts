import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { SearchResult } from '../search-result';
import { CountryService } from '../service/country.service';
import { Country } from '../model/country';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-by-country',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['../tour-list/tour-list.component.css']
})
export class TourByCountryComponent extends SearchResult{

  constructor(private tourService: TourService, private countryService: CountryService,private route: ActivatedRoute, tourOrderService: TourOrderService) {
    super(tourOrderService);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.countryService.findById(params.get('id')).subscribe((data: Country) => {
        this.title="Search results for destination country " + data.name;
      })

      this.tourService.findByCountry(params.get('id')).subscribe((data: Tour[]) => {
        this.tours = data;
      });
    })
  }
}
