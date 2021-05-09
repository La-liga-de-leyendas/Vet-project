import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsBuyedService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProductsBuyedById(id: any): Observable<any> {
    return this.http.get(`${this.url}/ProductsBuyed.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
  }

  public addProductsToBuy(product: any): Observable<any> {
    return this.http.post(`${this.url}/ProductsBuyed.json`, product);
  }
  public getProductsBuyed(): Observable<any> {
    return this.http.get(`${this.url}/ProductsBuyed.json`);
  }
}
