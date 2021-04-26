import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient, private router: Router) {

  }

  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body)
    .pipe(map((res: any) => {
      this.authSuccess(res.idToken, res.localId);
      return res;
    }));
  }

  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }

  public verifyLogged(): boolean {
    const token = localStorage.getItem('token');
    // return token ? true : false;
    return !!token;
  }

  public logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }
}
