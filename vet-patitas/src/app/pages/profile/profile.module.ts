import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { DateformatPipe } from 'src/app/shared/pipes/dateformat.pipe';

const routes: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DateformatPipe
  ]
})
export class ProfileModule { }
