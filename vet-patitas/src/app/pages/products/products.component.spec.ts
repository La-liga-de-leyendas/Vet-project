import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from 'src/app/shared/services/products.service';

import { ProductsComponent } from './products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

describe('ProductsComponent', () => {
    let service: ProductsService;
    let component: ProductsComponent;
    let htttp: HttpClient;
    let fixture: ComponentFixture<ProductsComponent>;
    let products = [];
    let productSubs: Subscription;
    let largoProd = 1;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              ProductsComponent
            ],
            providers: [
              HttpClientModule,
              AuthService,
              RouterModule,
              ProductsService,
            ],
            imports: [
              HttpClientModule,
              StoreModule.forRoot({}),
              RouterTestingModule,
              HttpClientTestingModule,
              AngularFireModule.initializeApp(environment.firebase),
            ]
        })
            .compileComponents().then(() => {
              fixture = TestBed.createComponent(ProductsComponent);
              component = fixture.componentInstance;
            });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
        service = TestBed.get(ProductsService);

    });

    it('should create all products', () => {
      expect(component).toBeTruthy();
    });
/*
    it('should have more than 30 products', () => {
      //component.ngOnInit();
      //service = new ProductsService(htttp);
      //component.obtenerProductosLargo();
      productSubs = service.getProducts().subscribe(res => {

        Object.entries(res).map((p: any) => products.push({id: p[0],  ...p[1]}));

        largoProd = products.length;


      });
      expect(largoProd).toBeGreaterThan(100000);
    });*/

    it('should call ngOnInit', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      //fixture.detectChanges();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled(); // PASSES
    });

    it('should getProducts length', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      spyOn(service, 'getProducts').and.callThrough();
      component.ngOnInit();
      service.getProducts();
      expect(service.getProducts).toHaveBeenCalled();
      var count = Object.keys(service.getProducts).length;
      expect(count).not.toEqual(0);

    });


});
