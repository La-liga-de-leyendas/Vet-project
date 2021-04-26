import { Component, OnInit } from '@angular/core';
import { RegisterauthService } from '../shared/services/registerauth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public ngAuthService: RegisterauthService) { }

  ngOnInit(): void {
  }

}
