import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesUrl: string;

  constructor(private http: HttpClient) {
    this.citiesUrl = 'http://localhost:8081/cities/';
  }

  public findById(id: any): Observable<City> {
    return this.http.get<City>(this.citiesUrl + id);
  }

  public getAll(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }
}
