import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'Chompa',
      subtitle: 'tienda'
    },
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'Chompa',
      subtitle: 'tienda'
    },
    {
      description: 'aaaaa',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: 1,
      price: 12,
      title: 'Chompa',
      subtitle: 'tienda'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
