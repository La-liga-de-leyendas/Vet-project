import { Component, OnInit } from '@angular/core';
import { RegisterauthService } from 'src/app/shared/services/registerauth.service';

@Component({
selector: 'profile-component',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

constructor(public ngAuthService: RegisterauthService) {
}

ngOnInit(){

}
}
