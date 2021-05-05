import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ProvidersService } from '../shared/services/providers.service';
import { VetsService } from '../shared/services/vets.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  provider = false;
  providerCant = 0;

  vet = false;
  vetCant = 0;

  providerGetSubs: Subscription;
  vetGetSubs: Subscription;
  constructor(private authService: AuthService, private providerService: ProvidersService, private vetService: VetsService) { }

  ngOnInit(): void {
    //this.provider = this.isProvider();
    this.loadProvider();
    this.loadVet();
  }

  isProvider(){
    if(this.providerCant == 0){
      this.provider = false;
    } else {
      this.provider = true;
    }
  }

  loadProvider(): void {
    const userId = this.authService.getUserId();
    this.providerGetSubs = this.providerService.getProviderById(userId).subscribe( res => {
      console.log('RESPUESTA PROVIDER: ', Object.entries(res).length);
      this.providerCant = Object.entries(res).length;
      this.isProvider();
    });
  }

  isVet(){
    if(this.vetCant == 0){
      this.vet = false;
    } else {
      this.vet = true;
    }
  }

  loadVet(): void {
    const userId = this.authService.getUserId();
    this.vetGetSubs = this.vetService.getVetsById(userId).subscribe( res => {
      console.log('RESPUESTA VET: ', Object.entries(res).length);
      this.vetCant = Object.entries(res).length;
      this.isVet();
    });
  }



  public onLogout(): void {
    this.authService.logout();
  }

}
