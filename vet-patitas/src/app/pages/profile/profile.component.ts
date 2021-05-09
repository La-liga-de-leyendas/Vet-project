import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterauthService } from 'src/app/shared/services/registerauth.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { UserService } from 'src/app/shared/services/user.service';
import { VetBookingService } from 'src/app/shared/services/vet-booking.service';
import { ProductsBuyedService } from 'src/app/shared/services/products-buyed.service';
//import { markAsUntransferable } from 'node:worker_threads';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  uuui: any;
  getInfoSubs: Subscription;
  infoAll = [];
  infoSpecify = [];
  prueba: any;
  getUUI: any;


  date: any = 'date';
  description: any = 'description';
  hour: any = 'hour';
  storeName: any = 'storeName';
  title: any = 'title';


  descriptionP: any = 'description';
  price: any = 'price';
  storeNameP: any = 'storeName';
  titleP: any = 'title';


  bookings = [];
  vetBookingsGetSubs: Subscription;

  productsB = [];
  productsBuyedGetSubs: Subscription;

  mapa: mapboxgl.Map;

  constructor(public ngAuthService: RegisterauthService, private userService: UserService, private authService: AuthService, private vetBookingService: VetBookingService, private productsBuyedService: ProductsBuyedService) {}



  ngOnInit() {

    //this.loadInfo();
      (mapboxgl as any).accessToken = environment.mapboxKey;
      this.mapa = new mapboxgl.Map({
          container: 'mapa-mapbox', // container id
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-68.1292579, -16.5752089], // LNG, LAT
          zoom: 16.6 // starting zoom
      });

      this.crearMarcador(-68.1292579, -16.5752089);



      // Add zoom and rotation controls to the map.
      //map.addControl(new mapboxgl.NavigationControl());
      const iii = localStorage.getItem('userId');
      //console.log('si agarra: ', iii);
      this.getUser(iii);
      this.loadOnlyMyVetBookings();
      this.loadOnlyMyProductsBuyed();
  }

  getUser(identifier){
    this.getUUI = identifier
    //console.log('solo el uui: ', this.getUUI);
  }

  crearMarcador(lng: number, lat: number) {

    const marker1 = new mapboxgl.Marker({
        draggable:true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa);

    marker1.on('drag',()=>{
        console.log(marker1.getLngLat())

    })
  }

  loadInfo(): void {
    this.infoAll = [];
    let aaa = [];
    const userId = this.authService.getUserId();
    this.getInfoSubs = this.vetBookingService.getVetBookingById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.infoAll.push({mmm: p[0],  ...p[1]}));
      //console.log('aaaaa: ', Object.values(this.infoAll)[0].myRerserved);
      aaa = Object.values(this.infoAll)[0].myRerserved;
      //aaa = Object.values(this.infoAll)[0].myRerserved;
      //this.loadOnlyName(aaa);
      this.loadOnlyReserves(aaa);
      //console.log('onlyyyyyyyyyyy data: ', this.infoSpecify)

    });

    //console.log('nnnnnnn: ', aaa);
  }

  loadOnlyReserves(reserves): void {
    this.infoSpecify = reserves;
    //this.prueba = JSON.stringify(this.infoSpecify)
    //console.log('solo el mail: ', this.infoSpecify);
  }


  loadOnlyMyVetBookings(): void {
    this.bookings = [];
    const userId = this.authService.getUserId();
    this.vetBookingsGetSubs = this.vetBookingService.getVetBookingById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.bookings.push({id: p[0],  ...p[1]}));
    });

  }

  loadOnlyMyProductsBuyed(): void {
    this.productsB = [];
    const userId = this.authService.getUserId();
    this.productsBuyedGetSubs = this.productsBuyedService.getProductsBuyedById(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.productsB.push({id: p[0],  ...p[1]}));
    });

  }


}
