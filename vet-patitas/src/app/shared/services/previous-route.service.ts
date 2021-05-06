import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
@Injectable()
export class PreviousRouteService {

  private previousUrl: string;
    private currentUrl: string;

    constructor(private router: Router) {

        this.currentUrl = this.router.url;
        this.previousUrl = null;

        this.router.events
                    .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
                    .subscribe((event: NavigationEnd) => {
                        this.previousUrl = this.currentUrl;
                        this.currentUrl = event.urlAfterRedirects;
                        console.log("prev: ", this.previousUrl)
                        console.log("curr: ", this.currentUrl)
                    });

    }

    public getPreviousUrl() {
        return this.previousUrl;
    }

};