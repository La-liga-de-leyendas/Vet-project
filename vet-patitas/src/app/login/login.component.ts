import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { RegisterauthService } from '../shared/services/registerauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  hide = true;
  constructor(private router: Router, private authService: AuthService, public ngAuthService: RegisterauthService) { }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['pages']);
    }
  }

  onLogin(form: any) {
    //console.log('FORM: ', form.value);
    let userLogged = 'invalid_form';
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        //console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['/pages']);
        userLogged = 'login_valid';
        //this.ngAuthService.SignIn(form.value.email, form.value.password);
      },
      err => {
        window.alert('Usuario y contraseña erroneos o todavía no tienes una cuenta');
        userLogged = 'login_invalid';
      }

    );
    return userLogged;
  }

  onLogin2(form): void{
    //console.log('VARIABLE LOCAL FORM: ', form.value);
    //console.log('FORM: ', form.value);
    let userLogged = 'invalid_form';
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  refresh(): void {
    window.location.reload();
  }
}
