import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgElseDirective } from '../shared/directives/ng-else.directive';
import { AuthService } from '../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,

    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
