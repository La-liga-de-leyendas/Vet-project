import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions';
import { ProductsBuyedService } from 'src/app/shared/services/products-buyed.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnDestroy {

  products = [];
  productSubs: Subscription;
  homeSubs: Subscription;
  userActual = [];

  cart = [];
  idEdit: any;
  pricesProductsTotalAmount = 0;
  pricesProductsFinal = [];
  titlesSaved = [];
  contadorTitle = 0;
  lastValue = 0;

  contadorP = 0;
  largoProd = 2;
  vetProductsAddSubs: Subscription;
  myReservedForBDD = [];

  constructor(private productsService: ProductsService, private store: Store<any>, private productsBuyedService: ProductsBuyedService, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      //console.log('HOMEEEEEEE', res);
      this.cart = Object.assign([], res.items);

      let arr = [];
      Object.keys(res.items).map(function(key){
          arr.push({[key]:res.items[key]})
          return arr;
      });
      //console.log('Object= ',res.items)
      //console.log('Array= ',arr)
      this.hola(arr);
      this.getAll();
      this.loadUser();
    });


    this.productSubs = this.productsService.getProducts().subscribe(res => {
      //console.log('respuesta: ', res);
      Object.entries(res).map((p: any) => this.products.push({id: p[0],  ...p[1]}));
      //console.log('laaaaaaaaaaaaaaaargo: ', this.products.length)
      this.largoProd = this.products.length;
      //console.log('size: ', this.largoProd);
      this.obtenerProductosLargo(this.products.length);
    });

  }

  obtenerProductosLargo(size): void{
    this.largoProd = size;
    //console.log('size: ', this.largoProd);
  }


  totalPricesProducts() {

    return this.pricesProductsFinal;
  }


  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  hola(information) {
    localStorage.setItem('products', JSON.stringify(information));
  }

  getAll(){
    let all = [];
    all = JSON.parse(localStorage.getItem('products'));
    this.myReservedForBDD = JSON.parse(localStorage.getItem('products'));
    //console.log('aaaaaaaaaaasasasasasa: ', this.myReservedForBDD);
  }

  onAddProductsToBuy(): void {

    this.vetProductsAddSubs = this.productsBuyedService.addProductsToBuy(


        {

          uui: this.authService.getUserId(),
          myProducts: this.myReservedForBDD
        }
      ).subscribe(
      res => {
        //console.log('datooooooos añadir', res);


      },
      err => {
        //console.log('ERROR DE SERVIDOR');
      }
    );
  }

  loadUser(): void {
    let userNameIdentify = "";
    let userMailIdentify = "";
    let userIdIdentify = "";
    this.userActual = [];
    const userId = this.authService.getUserId();
  }


  onComprar(product): void {
    this.contadorP = this.contadorP+1;
    this.idEdit = product.id;
    this.store.dispatch(AddProduct({ product: Object.assign({}, product) }));
    product.stock = product.stock-1;
    //console.log('ID: ',this.idEdit);
    this.productsService.updateProducts(this.idEdit,{description: product.description, imageUrl:product.imageUrl, price:product.price ,stock:product.stock, storeId: product.storeId, storeName: product.storeName, title: product.title}).subscribe(
      res => {
        //console.log(res);
      },
      err => {
        //console.log('ERROR DE SERVIDOR');
      }
    );;
    //this.products.= this.product.stock - 1;




    //console.log('CARRITO: ', product.price);
    this.pricesProductsFinal.push(parseInt(product.price));
    //console.log('CAAAAAAAAAAART: ', this.pricesProductsFinal);
    this.pricesProductsTotalAmount = this.pricesProductsTotalAmount + parseInt(product.price);
    //console.log('TOTAL: ', this.pricesProductsTotalAmount);


    this.titlesSaved.push(product.title);

    if(this.titlesSaved.includes(product.title)) {
      let titles = this.titlesSaved.filter(s => product.title);
      //console.log('CONTADOR PRODUCTOS: ', titles.length);
    } else {
      this.contadorTitle = 0;
    }



  }

}
