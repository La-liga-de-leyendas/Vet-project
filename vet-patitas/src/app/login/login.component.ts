import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { RegisterauthService } from '../shared/services/registerauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor(private router: Router, private authService: AuthService, public ngAuthService: RegisterauthService) { }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['pages']);
    }
  }

  onLogin(form: any): void{
    //console.log('FORM: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        //console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['/pages']);
        //this.ngAuthService.SignIn(form.value.email, form.value.password);
      },
      err => {
        window.alert('Usuario y contraseña erroneos o todavía no tienes una cuenta')
      }
    );
  }

  onLogin2(form): void{
    //console.log('VARIABLE LOCAL FORM: ', form.value);
    this.router.navigate(['pages']);
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  refresh(): void {
    window.location.reload();
  }
}
