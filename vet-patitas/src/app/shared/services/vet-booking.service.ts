import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterauthService } from './registerauth.service';

@Injectable({
  providedIn: 'root'
})
export class VetBookingService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }


}
