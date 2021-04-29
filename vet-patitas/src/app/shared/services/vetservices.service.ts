import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable()
export class VetServicesService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getVetServices(): Observable<any> {
    return this.http.get(`${this.url}/services.json`);
  }
}
