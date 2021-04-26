import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { Store } from '@ngrx/store';
import { AddVetService } from './store/home.actions';

@Component({
  selector: 'app-vet-services',
  templateUrl: './vet-services.component.html',
  styleUrls: ['./vet-services.component.scss']
})

export class VetServicesComponent implements OnInit, OnDestroy {

  vets = [];
  vetsSubs: Subscription;
  home2Subs: Subscription;

  schedule = [];


  constructor(private vetServicesService: VetServicesService, private store: Store<any>) { }

  ngOnInit(): void {

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
    this.store.dispatch(AddVetService({ vetservice: Object.assign({}, vetservice) }));
  }

}
