import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VetServicesComponent } from './vet-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: VetServicesComponent}
];

@NgModule({
  declarations: [
    VetServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VetServicesModule { }
