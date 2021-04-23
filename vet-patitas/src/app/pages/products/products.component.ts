import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  productSubs: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productSubs = this.productsService.getProducts().subscribe( res => {
      console.log('respuesta: ', res);
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

}
