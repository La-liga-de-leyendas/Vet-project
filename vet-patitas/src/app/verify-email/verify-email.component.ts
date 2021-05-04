import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  refresh(): void {
    window.location.reload();
  }
  showMessage() {
    window.alert('Acabamos de enviarte un nuevo mensaje. Por favor, refresca tu bandeja de entrada');
  }

}
