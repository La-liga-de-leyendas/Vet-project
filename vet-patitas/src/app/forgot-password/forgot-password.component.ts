import { Component, OnInit } from '@angular/core';
import { RegisterauthService } from '../shared/services/registerauth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public ngAuthService: RegisterauthService) { }

  ngOnInit(): void {
  }

}
