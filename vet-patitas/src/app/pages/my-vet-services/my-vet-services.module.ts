import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyVetServicesComponent } from './my-vet-services.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';

const routes: Routes = [
  {path: '', component: MyVetServicesComponent}
];

@NgModule({
  declarations: [
    MyVetServicesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    RouterModule.forChild(routes)
  ],
  providers: [
    VetServicesService
  ]
})
export class MyVetServicesModule { }
