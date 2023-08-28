import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '../model/tour';
import { TourOrder } from '../model/tour-order';

@Injectable({
  providedIn: 'root'
})
export class TourOrderService {

  private toursUrl: string;

  constructor(private http: HttpClient) {
    this.toursUrl = 'http://localhost:8081/orders/';
  }

  public save(tour: Tour) {
    return this.http.post<TourOrder>(this.toursUrl, new TourOrder(tour));
  }
}
