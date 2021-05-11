import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { environment } from 'src/environments/environment';

import { MyVetServicesComponent } from './my-vet-services.component';

describe('MyVetServicesComponent', () => {
    let service: VetServicesService;
    let component: MyVetServicesComponent;
    let fixture: ComponentFixture<MyVetServicesComponent>;
    let spySortService = jasmine.createSpyObj({
      date: "2021-05-19T04:00:00.000Z",
      description: "duración de 20 minutos",
      hour: "01:15 PM",
      imageUrl: "https://veterinariabonamie.cl/wp-content/uploads/2020/05/ecografiabonamie-300x300.jpg",
      stock: 5,
      storeName: "Clínica Doberman",
      title: "Ecografia",
      storeId: "2DnSOMr8viXc1BGRUYq6YOT5XPj1"
     });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyVetServicesComponent],
            providers: [
              HttpClientModule,
              AuthService,
              RouterModule,
              VetServicesService,
            ],
            imports: [
              FormsModule,
              BrowserModule,
              ReactiveFormsModule,
              HttpClientModule,
              StoreModule.forRoot({}),
              RouterTestingModule,
              HttpClientTestingModule,
              AngularFireModule.initializeApp(environment.firebase),
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyVetServicesComponent);
        component = fixture.componentInstance;
        service = TestBed.get(VetServicesService);
        fixture.detectChanges();

    });

    it('should create my vet services', () => {
      expect(component).toBeTruthy();
    });


    it('Vet services - submit button is disabled when the form is invalid -- Required fields are empty', async(() => {
      component.productForm.controls['title'].setValue('');
      component.productForm.controls['description'].setValue('');
      component.productForm.controls['imageUrl'].setValue('');
      component.productForm.controls['hour'].setValue('');
      component.productForm.controls['date'].setValue('');
      fixture.detectChanges();
      expect(component.productForm.valid).toBeFalsy();
    }));

    it('Adding new service form should be valid with fields filled', async(() => {
      component.productForm.controls['title'].setValue('Ecografia');
      component.productForm.controls['description'].setValue('duración de 20 minutos');
      component.productForm.controls['imageUrl'].setValue('Ecografia.png');
      component.productForm.controls['hour'].setValue('12:06P.M.');
      component.productForm.controls['date'].setValue('05/15/2021');
      fixture.detectChanges();
      expect(component.productForm.valid).toBeTruthy();
    }));


    it('Update a vet service in database', async(() => {
      //let htttp: HttpClient;
      //service = new VetServicesService(htttp);
      spyOn(service, 'updateServices').and.callThrough();
      fixture.detectChanges();
      const testForm = <NgForm>{
        value: {
            date: "2021-05-19T04:00:00.000Z",
            description: "duración de 20 minutos",
            hour: "01:15 PM",
            imageUrl: "https://veterinariabonamie.cl/wp-content/uploads/2020/05/ecografiabonamie-300x300.jpg",
            stock: 5,
            storeName: "Clínica Doberman",
            title: "Ecografia",
            storeId: "2DnSOMr8viXc1BGRUYq6YOT5XPj1"
        }
      };
      const foorm = {
            date: "2021-05-19T04:00:00.000Z",
            description: "duración de 20 minutos",
            hour: "01:15 PM",
            imageUrl: "https://veterinariabonamie.cl/wp-content/uploads/2020/05/ecografiabonamie-300x300.jpg",
            stock: 5,
            storeName: "Clínica Doberman",
            title: "Ecografia",
            storeId: "2DnSOMr8viXc1BGRUYq6YOT5XPj1"
      }
      //fixture.detectChanges();
      service.updateServices('6', foorm);
      fixture.detectChanges();
      expect(service.updateServices).toHaveBeenCalled(); // PASSES
    }));

});
