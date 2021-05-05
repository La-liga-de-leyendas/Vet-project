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

  public getVetServicesById(id: any): Observable<any> {
    return this.http.get(`${this.url}/services.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
  }

  public addServices(service: any): Observable<any> {
    return this.http.post(`${this.url}/services.json`, service);
  }

  public deleteServices(id: any): Observable<any> {
    return this.http.delete(`${this.url}/services/${id}.json`);
  }

  public updateServices(id: any, service: any): Observable<any> {
    return this.http.put(`${this.url}/services/${id}.json`, service);
  }
}
