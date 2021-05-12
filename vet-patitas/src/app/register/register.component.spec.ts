import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { RegisterauthService } from '../shared/services/registerauth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
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
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create RegisterComponent', () => {
      fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('Register > should validate user, password, cellphone, address empty', () => {
      const testForm = <NgForm>{
        value: {
            email: " ",
            password: " ",
            cellphone: "",
            address: ""
        }
      };
      spyOn(component, 'onEnviar3').and.callThrough();
      component.onEnviar3(testForm);
      //fixture.nativeElement.querySelector('button').click();
      //fixture.detectChanges();
      expect(testForm.valid).toBeFalsy();
    });

    it('Register > should validate correct user, password, cellphone, address filled', () => {
      const testForm = <NgForm>{
        value: {
            email: "123@gmail.com",
            password: "123456",
            cellphone: "70707070",
            address: "Av. Aguirre, calle 10, #123"
        }
      };
      //fixture.detectChanges();
      spyOn(component, 'onEnviar3').and.callThrough();
      //fixture.detectChanges();
      component.onEnviar3(testForm);
      //fixture.nativeElement.querySelector('button').click();
      //fixture.detectChanges();
      expect(testForm.value).toBeTruthy();
      //expect(testForm.value.cellphone).toBeTruthy();
      //expect(testForm.value.address).toBeTruthy();

    });


});
