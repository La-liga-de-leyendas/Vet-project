import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-services',
  templateUrl: './vet-services.component.html',
  styleUrls: ['./vet-services.component.scss']
})
export class VetServicesComponent implements OnInit {

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
