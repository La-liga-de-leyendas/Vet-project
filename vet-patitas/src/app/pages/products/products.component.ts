import { Component, OnInit, OnDestroy} from '@angular/core';
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


  constructor(private productsService: ProductsService, private store: Store<any>) { }

  ngOnInit(): void {
    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      console.log('HOMEEEEEEE', res);
      this.cart = Object.assign([], res.items);
      
    });


    this.productSubs = this.productsService.getProducts().subscribe( res => {
      console.log('respuesta: ', res);
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnDestroy(): void{
    // tslint:disable-next-line: no-unused-expression
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));
  }

}
