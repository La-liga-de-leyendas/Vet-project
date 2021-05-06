import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { min } from 'rxjs/operators';
import { RegisterauthService } from '../shared/services/registerauth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cellphone: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(9)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(140)]),   
  });
  userAddSubs: Subscription;

  constructor(private formBuilder: FormBuilder, public register_service: RegisterauthService, public users_service: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: '',
      cellphone: '',
      address: '',
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
