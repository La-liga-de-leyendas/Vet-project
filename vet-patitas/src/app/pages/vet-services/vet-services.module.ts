import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetServicesComponent } from './vet-services.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: VetServicesComponent }
];

@NgModule({
  declarations: [
    VetServicesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    //HttpClientModule,
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
export class VetServicesModule { }
