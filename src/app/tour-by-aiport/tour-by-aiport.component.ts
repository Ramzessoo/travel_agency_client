import { Component } from '@angular/core';
import { Tour } from '../model/tour';
import { TourService } from '../service/tour-service.service';
import { ActivatedRoute } from '@angular/router';
import { SearchResult } from '../search-result';
import { AiportService } from '../service/aiport.service';
import { Airport } from '../model/airport';
import { TourOrderService } from '../service/tour-order.service';

@Component({
  selector: 'app-tour-by-aiport',
  templateUrl: '../tour-list/tour-list.component.html',
  styleUrls: ['./tour-by-aiport.component.css']
})
export class TourByAiportComponent extends SearchResult{

  constructor(private tourService: TourService, private airportService: AiportService,private route: ActivatedRoute, tourOrderService: TourOrderService) {
    super(tourOrderService);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.airportService.findById(params.get('id')).subscribe((data: Airport) => {
        this.title="Search results for destination aiport " + data.name;
      })

      this.tourService.findByAiport(params.get('id')).subscribe((data: Tour[]) => {
        this.tours = data;
      });
    })
  }
}
