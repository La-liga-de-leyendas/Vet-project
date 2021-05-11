import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { environment } from 'src/environments/environment';

import { VetServicesComponent } from './vet-services.component';

describe('VetServicesComponent', () => {
    let service: VetServicesService;
    let component: VetServicesComponent;
    let fixture: ComponentFixture<VetServicesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              VetServicesComponent
            ],
            providers: [
              HttpClientModule,
              AuthService,
              RouterModule,
              VetServicesService,
            ],
            imports: [
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
        fixture = TestBed.createComponent(VetServicesComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
        service = TestBed.get(VetServicesService);

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should getVetServices length diffetent to Zero', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      spyOn(service, 'getVetServices').and.callThrough();

      component.ngOnInit();
      service.getVetServices();
      expect(service.getVetServices).toHaveBeenCalled();
      var count = Object.keys(service.getVetServices).length;
      expect(count).not.toEqual(0);

    });
});
