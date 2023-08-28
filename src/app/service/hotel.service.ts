import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelsUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8081/hotels/';
  }

  public findById(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(this.hotelsUrl + id);
  }

  public findForCity(cityId: any): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl + "cityId=" + cityId);
  }
}
