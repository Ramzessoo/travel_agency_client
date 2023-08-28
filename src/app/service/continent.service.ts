import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continent } from '../model/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private continentsUrl: string;

  constructor(private http: HttpClient) {
    this.continentsUrl = 'http://localhost:8081/continents/';
  }

  public findById(id: any): Observable<Continent> {
    return this.http.get<Continent>(this.continentsUrl + id);
  }
}
