import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getVetsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/vets.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
  }
}
