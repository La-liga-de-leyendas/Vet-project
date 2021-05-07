import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterauthService } from '../shared/services/registerauth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  userAddSubs: Subscription;

  constructor(private formBuilder: FormBuilder, public register_service: RegisterauthService, public users_service: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [ Validators.required , Validators.maxLength(31), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(23)]],
      cellphone: ['', [Validators.required, Validators.pattern("^[6-7][0-9]*$")]],
      address: ['', [Validators.required, Validators.maxLength(95)]],
     });
  }

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.userForm.value);

    this.userAddSubs = this.users_service.addUsers({
      ...this.userForm.value
    }
  ).subscribe(res => {
    console.log('RSPUESTA: ', res);
  },
    err => {
      console.log('ERROR DE SERVIDOR');
    }
  );
  }

}