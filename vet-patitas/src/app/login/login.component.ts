import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void{
    console.log('FORM: ', form.value);
  }

  onLogin2(form): void{
    console.log('VARIABLE LOCAL FORM: ', form.value);
    this.router.navigate(['pages']);
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

}
