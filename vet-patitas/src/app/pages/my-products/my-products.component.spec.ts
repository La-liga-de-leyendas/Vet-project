import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';

import { MyProductsComponent } from './my-products.component';

describe('MyProductsComponent', () => {
    let component: MyProductsComponent;
    let fixture: ComponentFixture<MyProductsComponent>;
    let de: DebugElement;
    let el: HTMLElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyProductsComponent],
            imports: [
              FormsModule,
              BrowserModule,
              ReactiveFormsModule,
              RouterModule,
              HttpClientModule,
              StoreModule.forRoot({}),
              RouterTestingModule,
              HttpClientTestingModule,
              AngularFireModule.initializeApp(environment.firebase),
            ],
            providers: [
              AuthService,
              ProductsService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create my products', () => {
        expect(component).toBeTruthy();
    });

    it('should test if submit button is disabled when the form is invalid -- Required fields are empty', async(() => {
      component.productForm.controls['title'].setValue('');
      component.productForm.controls['description'].setValue('');
      component.productForm.controls['imageUrl'].setValue('');
      component.productForm.controls['price'].setValue('');
      component.productForm.controls['stock'].setValue('');
      fixture.detectChanges();
      expect(component.productForm.valid).toBeFalsy();
    }));


    it('form should be valid with fields filled', async(() => {
      component.productForm.controls['title'].setValue('Galletas para pecer');
      component.productForm.controls['description'].setValue('galletas de todo color');
      component.productForm.controls['imageUrl'].setValue('123.png');
      component.productForm.controls['price'].setValue('12');
      component.productForm.controls['stock'].setValue('5');
      fixture.detectChanges();
      expect(component.productForm.valid).toBeTruthy();
    }));
});
