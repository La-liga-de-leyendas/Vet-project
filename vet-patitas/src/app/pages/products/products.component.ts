import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnDestroy {

  products = [];
  productSubs: Subscription;
  homeSubs: Subscription;

  cart = [];

  pricesProductsTotalAmount = 0;
  pricesProductsFinal = [];
  titlesSaved = [];
  contadorTitle = 0;
  lastValue = 0;
  constructor(private productsService: ProductsService, private store: Store<any>) { }

  ngOnInit(): void {

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      //console.log('HOMEEEEEEE', res);
      this.cart = Object.assign([], res.items);
    });


    this.productSubs = this.productsService.getProducts().subscribe(res => {
      console.log('respuesta: ', res);
      Object.entries(res).map(p => this.products.push(p[1]));
    });


  }

  totalPricesProducts() {

    return this.pricesProductsFinal;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({ product: Object.assign({}, product) }));
    product.stock = product.stock-1;
    //this.products.= this.product.stock - 1;



    console.log('CARRITO: ', product.price);
    this.pricesProductsFinal.push(parseInt(product.price));
    console.log('CAAAAAAAAAAART: ', this.pricesProductsFinal);
    this.pricesProductsTotalAmount = this.pricesProductsTotalAmount + parseInt(product.price);
    console.log('TOTAL: ', this.pricesProductsTotalAmount);


    this.titlesSaved.push(product.title);

    if(this.titlesSaved.includes(product.title)) {
      let titles = this.titlesSaved.filter(s => product.title);
      console.log('CONTADOR PRODUCTOS: ', titles.length);
    } else {
      this.contadorTitle = 0;
    }



  }

}
