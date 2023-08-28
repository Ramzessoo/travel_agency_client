import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../model/airport';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiportService {
  private airportsUrl: string;

  constructor(private http: HttpClient) {
    this.airportsUrl = 'http://localhost:8081/airports/';
  }

  public findById(id: any): Observable<Airport> {
    return this.http.get<Airport>(this.airportsUrl + id);
  }

  public findForCity(cityId: any): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.airportsUrl + "cityId=" + cityId)
  }
}
