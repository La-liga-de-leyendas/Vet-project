import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VetServicesService } from 'src/app/shared/services/vetservices.service';
import { Store } from '@ngrx/store';
import { AddVetService } from './store/home.actions';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-vet-services',
  templateUrl: './vet-services.component.html',
  styleUrls: ['./vet-services.component.scss']
})

export class VetServicesComponent implements OnDestroy,  OnInit {

  vets = [];
  vetsSubs: Subscription;
  home2Subs: Subscription;

  //servicesReserved = [];
  //scheduleReserved = [];
  schedule = [];
  clicked = false;
  info = [];
  stock = 0;
  index = 0;

  informationAll = [];
  idEdit: any;
  onlyUserUui: any;
  onlyUserMail: any;
  onlyUserIdName: any;
  myReservedForBDD = [];

  userActual = [];
  productUpdateSubs: Subscription;
  userUpdateSubs: Subscription;

  constructor(private vetServicesService: VetServicesService, private store: Store<any>, private userService: UserService, private authService: AuthService) { }

  ngOnInit():void {

    this.home2Subs = this.store.select(s => s.home2).subscribe(res => {
      //console.log('VET', res);
      this.schedule = Object.assign([], res.items);
      //console.log('VET', this.schedule);
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

    this.vetsSubs = this.vetServicesService.getVetServices().subscribe(res => {
      //console.log('respuesta: ', res);
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
    //console.log('cantidadaaa: ', vetservice.title);
    //this.hola(vetservice);

  }

  hola(information) {
    localStorage.setItem('services', JSON.stringify(information));
  }

  getAll(){
    let all = [];
    all = JSON.parse(localStorage.getItem('services'));
    this.myReservedForBDD = JSON.parse(localStorage.getItem('services'));
    //console.log('aaaaaaaaaaasasasasasa: ', this.myReservedForBDD);
  }

  onUpdateProduct(): void {

    this.productUpdateSubs = this.userService.updateProducts(

      this.onlyUserIdName,
        {
          email: this.onlyUserMail,
          uui: this.onlyUserUui,
          myRerserved: this.myReservedForBDD
        }
      ).subscribe(
      res => {
        //console.log(res);


      },
      err => {
        //console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
  }


  loadUser(): void {
    let userNameIdentify = "";
    let userMailIdentify = "";
    let userIdIdentify = "";
    this.userActual = [];
    const userId = this.authService.getUserId();
    this.userUpdateSubs = this.userService.getIdUser(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.userActual.push({idName: p[0],  ...p[1]}));
      //console.log('usaurio: ', this.userActual);

      userNameIdentify = Object.values(this.userActual)[0].idName;
      userMailIdentify = Object.values(this.userActual)[0].email;
      userIdIdentify = Object.values(this.userActual)[0].uui;
      this.OnlyGetIdName(userNameIdentify, userMailIdentify, userIdIdentify);

    },
    err => {
      //console.log('ERROR DE SERVIDOR de usuario');
    }
    );

  }

  OnlyGetIdName(idName, mail, uui): void {
    this.onlyUserIdName = idName;
    this.onlyUserMail = mail;
    this.onlyUserUui = uui;
    //console.log('solo el id plox: ', this.onlyUserIdName);
  }


}