import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tour } from '../model/tour'


@Injectable({
  providedIn: 'root'
})
export class TourService {

  private toursUrl: string;

  constructor(private http: HttpClient) {
    this.toursUrl = 'http://localhost:8081/tours/';
  }

  public findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl);
  }

  public findPromoted(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'bestOffers')
  }

  public findLastMinute(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'lastMinute')
  }

  public findByAiport(id: any): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'airportId=' + id)
  }

  public findByCity(id: any): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'cityId=' + id)
  }

  public findByCountry(id: any): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'countryId=' + id)
  }

  public findByContinent(id: any): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'continentId=' + id)
  }

  public findPopular(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl + 'lastBought');
  }

  public save(tour: Tour) {
    return this.http.post<Tour>(this.toursUrl, tour);
  }
}
