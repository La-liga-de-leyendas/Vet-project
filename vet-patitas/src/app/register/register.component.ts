import { Component, OnInit } from '@angular/core';
import { RegisterauthService } from '../shared/services/registerauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public register_service: RegisterauthService) { }

  ngOnInit(): void {
  }

}
