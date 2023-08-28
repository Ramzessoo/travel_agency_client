import { Component, OnInit } from '@angular/core';
import { Tour } from '../model/tour';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../service/tour-service.service';
import { CityService } from '../service/city.service';
import { City } from '../model/city';
import { AiportService } from '../service/aiport.service';
import { Airport } from '../model/airport';
import { Hotel } from '../model/hotel';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.css']
})
export class TourFormComponent implements OnInit {
  tour: Tour;

  cities: City[] = [];
  airportsFrom: Airport[] = [];
  airportsTo: Airport[] = [];
  hotels: Hotel[] = [];
  typesOfBoard: string[] = ["Bed & Breakfast", "Half Board", "Full Board", "All Inclusive"];

  isFromCity = false;
  isToCity = false;

  constructor(private route: ActivatedRoute, private router: Router, private tourService: TourService, private cityService: CityService, private airportService: AiportService, private hotelService: HotelService) {
    this.tour = new Tour();
  }
  ngOnInit(): void {
    this.cityService.getAll().subscribe((data: City[]) => {
      this.cities = data;
    })

  }

  fromCityChanges() {
    if (this.tour.fromCity !== undefined) {
      this.airportService.findForCity(this.tour.fromCity.id).subscribe((data: Airport[]) => {
        this.airportsFrom = data;
      });
      this.isFromCity = true;
    } else {
      this.isFromCity = false;
    }
  }

  toCityChanges() {
    if (this.tour.toCity !== undefined) {

      this.airportService.findForCity(this.tour.toCity.id).subscribe((data: Airport[]) => {
        this.airportsTo = data;
      });

      this.hotelService.findForCity(this.tour.toCity.id).subscribe((data: Hotel[]) => {
        this.hotels = data;
      })

      this.isToCity = true;
    } else {
      this.isToCity = false;
    }
  }

  onSubmit() {
    this.tourService.save(this.tour).subscribe(result => {
      this.tour = new Tour;
      this.gotoTourList()
    });
  }

  gotoTourList() {
    this.router.navigate(['/allTours']);
  }
}
