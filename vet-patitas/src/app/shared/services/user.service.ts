import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users.json`);
  }

  public addUsers(user: any): Observable<any> {
    return this.http.post(`${this.url}/users.json`, user);
  }

  public getIdUser(id: any): Observable<any> {
    return this.http.get(`${this.url}/users.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
  }

  public updateProducts(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/users/${id}.json`, product);
  }
}
