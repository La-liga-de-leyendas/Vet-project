import { Component, OnInit } from '@angular/core';
import { RegisterauthService } from 'src/app/shared/services/registerauth.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
//import { markAsUntransferable } from 'node:worker_threads';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    mapa: mapboxgl.Map;

    constructor(public ngAuthService: RegisterauthService) {
    }



    ngOnInit() {
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


}
