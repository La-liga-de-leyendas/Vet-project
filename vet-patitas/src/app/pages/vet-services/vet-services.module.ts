import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetServicesComponent } from './vet-services.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path: '', component: VetServicesComponent}
];

@NgModule({
  declarations: [
    VetServicesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class VetServicesModule { }
