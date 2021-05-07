import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterauthService } from 'src/app/shared/services/registerauth.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { UserService } from 'src/app/shared/services/user.service';
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

  mapa: mapboxgl.Map;

  constructor(public ngAuthService: RegisterauthService, private userService: UserService, private authService: AuthService) {}



  ngOnInit() {
      (mapboxgl as any).accessToken = environment.mapboxKey;
      this.mapa = new mapboxgl.Map({
          container: 'mapa-mapbox', // container id
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-68.1292579, -16.5752089], // LNG, LAT
          zoom: 16.6 // starting zoom
      });

      this.crearMarcador(-68.1292579, -16.5752089);this.crearMarcador2(-68.1252055, -16.497047);
      this.crearMarcador2(-68.1245081, -16.4967384);
      this.crearMarcador2(-68.1243633, -16.4970573);



      // Add zoom and rotation controls to the map.
      //map.addControl(new mapboxgl.NavigationControl());
  }

  crearMarcador(lng: number, lat: number) {

    const marker1 = new mapboxgl.Marker({
      color: "#000000",  
      draggable:true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa);

    marker1.on('drag',()=>{
        console.log(marker1.getLngLat())

    })
    
  }

  crearMarcador2(lng: number, lat: number) {

    const marker1 = new mapboxgl.Marker({
      color: "#FF0000",  
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
    this.getInfoSubs = this.userService.getIdUser(userId).subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.infoAll.push({mmm: p[0],  ...p[1]}));
      console.log('aaaaa: ', Object.values(this.infoAll)[0].myRerserved);
      aaa = Object.values(this.infoAll)[0].myRerserved;
      //aaa = Object.values(this.infoAll)[0].myRerserved;
      //this.loadOnlyName(aaa);
      this.loadOnlyReserves(aaa);
      console.log('onlyyyyyyyyyyy data: ', this.infoSpecify)

    });

    console.log('nnnnnnn: ', aaa);
  }

  loadOnlyReserves(reserves): void {
    this.infoSpecify = reserves;
    //this.prueba = JSON.stringify(this.infoSpecify)
    console.log('solo el mail: ', this.infoSpecify);
  }


}
