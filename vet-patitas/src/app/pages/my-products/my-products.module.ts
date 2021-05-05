import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProductsComponent } from './my-products.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: MyProductsComponent}
];

@NgModule({
  declarations: [
    MyProductsComponent
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
    ProductsService
  ]
})
export class MyProductsModule { }
