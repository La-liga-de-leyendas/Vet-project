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

  vetinariesBookings = [];
  vetBookingsGetAllSubs: Subscription;
  iddd: any = 'BWQBoCMCIbbiSL791oigkdb0rUh2';

  mapa: mapboxgl.Map;

  constructor(public ngAuthService: RegisterauthService, private userService: UserService, private authService: AuthService, private vetBookingService: VetBookingService, private productsBuyedService: ProductsBuyedService) {}



  ngOnInit() {

    //this.loadInfo();
      (mapboxgl as any).accessToken = environment.mapboxKey;
      this.mapa = new mapboxgl.Map({
          container: 'mapa-mapbox', // container id
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-68.12599110810477, -16.496885799116242], // LNG, LAT
          zoom: 18.6 // starting zoom
      });

     this.crearMarcador(-68.12599110810477, -16.496885799116242);
     this.crearMarcador2(-68.12635387569559, -16.4969757269928);
     this.crearMarcador2( -68.12615391112081, -16.497053777569633);
     this.crearMarcador2(-68.12575044277528, -16.49692652117828);

      // Add zoom and rotation controls to the map.
      //map.addControl(new mapboxgl.NavigationControl());
      const iii = localStorage.getItem('userId');
      //const mmm = JSON.parse(localStorage.getItem('user'));
      //console.log('si agarra: ',JSON.stringify(mmm.mail));
      this.getUser(iii);
      this.loadOnlyMyVetBookings();
      this.loadOnlyMyProductsBuyed();
      this.loadVetBookingsAll();
  }

  getUser(identifier){
    this.getUUI = identifier
    //console.log('solo el uui: ', this.getUUI);
  }

  crearMarcador(lng: number, lat: number) {

    const marker1 = new mapboxgl.Marker({
      color: "#000000",
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker1.on('drag',()=>{
        //console.log(marker1.getLngLat())

    })

  }

  crearMarcador2(lng: number, lat: number) {

    const marker2 = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker2.on('drag',()=>{
        //console.log(marker2.getLngLat())

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


  loadVetBookingsAll(): void {
    this.vetinariesBookings = [];
    this.vetBookingsGetAllSubs = this.vetBookingService.getVetBookings().subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.vetinariesBookings.push({id: p[0],  ...p[1]}));
    });

  }



}
