import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterauthService } from 'src/app/shared/services/registerauth.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { UserService } from 'src/app/shared/services/user.service';

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

  constructor(public ngAuthService: RegisterauthService, private userService: UserService, private authService: AuthService) { }



  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox', 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-68.1264728, -16.4969384], // LNG, LAT
      zoom: 18.6
    });

    const places = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'description': "Rabitos"

          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-68.1264728, -16.4969383]
          }
        }]
    };

    this.mapa.on('load', function () {
      
      this.mapa.addSource('places', {
      'type': 'geojson',
      'data': places
      });
       
      this.mapa.addLayer({
      'id': 'poi-labels',
      'type': 'symbol',
      'source': 'places',
      'layout': {
      'text-field': ['get', 'description'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      //'icon-image': ['get', 'icon']
      }
      });
       
      //this.mapa.rotateTo(180, { duration: 10000 });
      });


     this.crearMarcador(-68.1264728, -16.4969383);
     this.crearMarcador2(-68.1259891, -16.4969524);
     this.crearMarcador2(-68.1265798, -16.4970261);
     this.crearMarcador2(-68.1258592, -16.49695);
     this.crearMarcador2(-68.1262795, -16.4971232);

    
  }

  crearMarcador(lng: number, lat: number) {

    const marker1 = new mapboxgl.Marker({
      color: "#000000",
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker1.on('drag', () => {
      console.log(marker1.getLngLat())

    })

  }

  crearMarcador2(lng: number, lat: number) {

    const marker2 = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker2.on('drag', () => {
      console.log(marker2.getLngLat())

    })

  }

  loadInfo(): void {
    this.infoAll = [];
    let aaa = [];
    const userId = this.authService.getUserId();
    this.getInfoSubs = this.userService.getIdUser(userId).subscribe(res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.infoAll.push({ mmm: p[0], ...p[1] }));
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
