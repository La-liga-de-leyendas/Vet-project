import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ProvidersService } from '../shared/services/providers.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  provider = false;
  providerCant = 0;

  providerGetSubs: Subscription;
  constructor(private authService: AuthService, private providerService: ProvidersService) { }

  ngOnInit(): void {
    //this.provider = this.isProvider();
    this.loadProvider();
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

  public onLogout(): void {
    this.authService.logout();
  }

}
