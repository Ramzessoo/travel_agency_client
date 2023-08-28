import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl: string;

  constructor(private http: HttpClient) {
    this.countriesUrl = 'http://localhost:8081/countries/';
  }

  public findById(id: any): Observable<Country> {
    return this.http.get<Country>(this.countriesUrl + id);
  }
}
