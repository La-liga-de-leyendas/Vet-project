import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login.component';
import { RegisterauthService } from '../shared/services/registerauth.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
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
                RegisterauthService
            ]
        })
            .compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Login > form value should update from when u change the input', (() => {
        const usernameContainer = fixture.debugElement.nativeElement.querySelector('#username-container');
        const passwordContainer = fixture.debugElement.nativeElement.querySelector('#password-container');
        const loginBtnContainer = fixture.debugElement.nativeElement.querySelector('#login-btn-container');
        expect(usernameContainer).toBeDefined();
        expect(passwordContainer).toBeDefined();
        expect(loginBtnContainer).toBeDefined();
    }));


    it('Login > should validate correct user and password empty', () => {
      const testForm = <NgForm>{
        value: {
            email: " ",
            password: " "
        }
      };
      spyOn(component, 'onLogin').and.callThrough();
      component.onLogin(testForm);
      //fixture.nativeElement.querySelector('button').click();
      //fixture.detectChanges();
      expect(testForm.valid).toBeFalsy();
    });

    it('Login> should validate correct user and password filled', () => {
      const testForm = <NgForm>{
        value: {
            email: "luzmarianacarlo1999@gmail.com",
            password: "mariana123"
        }
      };
      spyOn(component, 'onLogin').and.callThrough();
      component.onLogin(testForm);
      //fixture.nativeElement.querySelector('button').click();
      //fixture.detectChanges();
      expect(testForm.value).toBeTruthy();
    });
});
