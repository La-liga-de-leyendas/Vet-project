import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { Store } from '@ngrx/store';
import { AddVetService } from './store/home.actions';

@Component({
  selector: 'app-vet-services',
  templateUrl: './vet-services.component.html',
  styleUrls: ['./vet-services.component.scss']
})

export class VetServicesComponent implements OnDestroy, AfterContentInit {

  vets = [];
  vetsSubs: Subscription;
  home2Subs: Subscription;

  //servicesReserved = [];
  //scheduleReserved = [];
  schedule = [];
  clicked = false;
  stock = 0;
  index = 0;

  constructor(private vetServicesService: VetServicesService, private store: Store<any>) { }

  ngAfterContentInit():void {

    this.home2Subs = this.store.select(s => s.home2).subscribe(res => {
      console.log('VET', res);
      this.schedule = Object.assign([], res.items);

    });

    this.vetsSubs = this.vetServicesService.getVetServices().subscribe(res => {
      console.log('respuesta: ', res);
      Object.entries(res).map(p => this.vets.push(p[1]));
    });
  }

  ngOnDestroy(): void {

    this.vetsSubs ? this.vetsSubs.unsubscribe() : '';
    this.home2Subs ? this.home2Subs.unsubscribe() : '';
  }

  onReservar(vetservice): void {
    const index = this.vets.findIndex(p => p === vetservice);
    this.store.dispatch(AddVetService({ vetservice: Object.assign({}, vetservice) }));
    /*vetservice.stock = vetservice.stock - 1;
    this.stock = vetservice.stock;
    console.log('cantidad: ', vetservice);
    this.index = vetservice.id;*/

  }

}
