import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RegisterauthService } from '../services/registerauth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyMailGuard implements CanActivate {

  constructor(public router: Router, private authService: AuthService, public ngAuthService: RegisterauthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ngAuthService.isLoggedIn !== true) {
        this.router.navigate(['login'])
      }
      return true;
  }

}
