import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterauthService } from './registerauth.service';

@Injectable({
  providedIn: 'root'
})
export class VetBookingService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getVetBookingById(id: any): Observable<any> {
    return this.http.get(`${this.url}/VetBookings.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
  }

  public addVetBooking(booking: any): Observable<any> {
    return this.http.post(`${this.url}/VetBookings.json`, booking);
  }
  public getVetBooking(): Observable<any> {
    return this.http.get(`${this.url}/VetBookingss.json`);
  }

}
