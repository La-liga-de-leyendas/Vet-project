(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mari-\Desktop\Topicos Ing. de Sof\Proyecto_Vet\Vet-project\vet-patitas\src\main.ts */"zUnb");


/***/ }),

/***/ "21uT":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/previous-route.service.ts ***!
  \***********************************************************/
/*! exports provided: PreviousRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousRouteService", function() { return PreviousRouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let PreviousRouteService = class PreviousRouteService {
    constructor(router) {
        this.router = router;
        this.currentUrl = this.router.url;
        this.previousUrl = null;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe((event) => {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.urlAfterRedirects;
            console.log("prev: ", this.previousUrl);
            console.log("curr: ", this.currentUrl);
        });
    }
    getPreviousUrl() {
        return this.previousUrl;
    }
};
PreviousRouteService.ɵfac = function PreviousRouteService_Factory(t) { return new (t || PreviousRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PreviousRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PreviousRouteService, factory: PreviousRouteService.ɵfac, providedIn: "root" });
PreviousRouteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PreviousRouteService);

;


/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_services_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/providers.service */ "kW5i");
/* harmony import */ var _shared_services_vets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/vets.service */ "OAQY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function PagesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cont\u00E1ctanos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagesComponent_div_8_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mis productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagesComponent_div_8_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mis servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Productos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Servicios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cont\u00E1ctanos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PagesComponent_div_8_div_22_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PagesComponent_div_8_div_23_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.vet);
} }
class PagesComponent {
    constructor(authService, providerService, vetService) {
        this.authService = authService;
        this.providerService = providerService;
        this.vetService = vetService;
        this.provider = false;
        this.providerCant = 0;
        this.vet = false;
        this.vetCant = 0;
    }
    ngOnInit() {
        //this.provider = this.isProvider();
        this.loadProvider();
        this.loadVet();
    }
    isProvider() {
        if (this.providerCant == 0) {
            this.provider = false;
        }
        else {
            this.provider = true;
        }
    }
    loadProvider() {
        const userId = this.authService.getUserId();
        this.providerGetSubs = this.providerService.getProviderById(userId).subscribe(res => {
            //console.log('RESPUESTA PROVIDER: ', Object.entries(res).length);
            this.providerCant = Object.entries(res).length;
            this.isProvider();
        });
    }
    isVet() {
        if (this.vetCant == 0) {
            this.vet = false;
        }
        else {
            this.vet = true;
        }
    }
    loadVet() {
        const userId = this.authService.getUserId();
        this.vetGetSubs = this.vetService.getVetsById(userId).subscribe(res => {
            //console.log('RESPUESTA VET: ', Object.entries(res).length);
            this.vetCant = Object.entries(res).length;
            this.isVet();
        });
    }
    onLogout() {
        this.authService.logout();
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_providers_service__WEBPACK_IMPORTED_MODULE_2__["ProvidersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_vets_service__WEBPACK_IMPORTED_MODULE_3__["VetsService"])); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 90, vars: 2, consts: [[1, "navbar", "navbar-icon-top", "navbar-expand-lg", "navbar-dark", "navbar-custom", "header", "fixed-top"], ["href", "#", 1, "navbar-brand"], [1, "fab", "fa-product-hunt", "fa-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse", 2, "text-align", "center"], [4, "ngIf"], [1, "nav", "navbar-nav", "ml-auto"], [1, "btn", "btn-outline-danger", 2, "color", "white", "border-color", "white", 3, "click"], ["id", "footer", 1, "footer", 2, "background-color", "#CEAC2C", "height", "fit-content"], [1, "footer-top"], [1, "container"], [1, "row", "gy-4"], [1, "col-lg-4", "col-md-12", "footer-info"], ["href", "index.html", 1, "logo", "d-flex", "align-items-center"], [2, "padding-left", "15%"], ["src", "../../assets/images/logo.png", "height", "100%", "width", "70%"], [1, "col-lg-3", "col-6", "footer-links"], [1, "nav-item"], ["routerLink", "home", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-home", 2, "color", "black", "font-size", "large"], ["routerLink", "products", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-dolly-flatbed", 2, "color", "black", "font-size", "large"], ["routerLink", "vet-services", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-list-alt", 2, "color", "black", "font-size", "large"], ["routerLink", "contact-us", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-address-card", 2, "color", "black", "font-size", "large"], ["routerLink", "profile", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-users-cog", 2, "color", "black", "font-size", "large"], [1, "col-lg-2", "col-6", "footer-links"], [1, "bi", "bi-chevron-right"], ["href", "https://www.dancefree.com.co/diario/clinicas-veterinarias-en-la-paz-bolivia", 1, "nav-link"], ["href", "https://www.boliviaentusmanos.com/amarillas/605/1/bolivia/peluquerias-para-animales.html", 1, "nav-link"], ["href", "https://www.facebook.com/ParqueCaninoDeLaPaz/", 1, "nav-link"], [1, "col-lg-3", "col-md-12", "footer-contact", "text-center", "text-md-start"], ["href", "#", 1, "back-to-top", "d-flex", "align-items-center", "justify-content-center"], [1, "bi", "bi-arrow-up-short"], [1, "navbar-nav", "mr-auto"], [1, "fa", "fa-home", 2, "margin-right", "5px"], [1, "fa", "fa-dolly-flatbed", 2, "margin-right", "5px"], [1, "fa", "fa-list-alt", 2, "margin-right", "5px"], [1, "fa", "fa-address-card", 2, "margin-right", "5px"], [1, "fa", "fa-users-cog", 2, "margin-right", "5px"], [1, "nav-item2"], ["routerLink", "my-products", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-poll-h", 2, "margin-right", "5px"], ["routerLink", "my-vet-services", "routerLinkActive", "active", 1, "nav-link"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ATITAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagesComponent_div_7_Template, 22, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PagesComponent_div_8_Template, 24, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_11_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PATITAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Nuestros Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Venta de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Servicios especializados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Veterinaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Aseo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Cont\u00E1ctate con nosotros!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 21 de Calacoto #2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " La Paz, BOLIVIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Pronto, todo el pa\u00EDs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Telefono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " +591 7589 55488 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " patitas@vet.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.provider && !ctx.vet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.provider || ctx.vet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".navbar-icon-top[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30px;\n  font-size: 28px;\n}\n\n.navbar-icon-top[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  position: absolute;\n  right: 0;\n  font-family: sans-serif;\n}\n\n.navbar-icon-top[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%] {\n  top: 3px;\n  line-height: 42px;\n}\n\n.navbar-icon-top[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    > .fa[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n  top: -10px;\n}\n\n.navbar-custom[_ngcontent-%COMP%] {\n  background-color: #CEAC2C;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.nav-item2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksUUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6InBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1pY29uLXRvcCAubmF2YmFyLW5hdiAubmF2LWxpbms+LmZhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWljb24tdG9wIC5uYXZiYXItbmF2IC5uYXYtbGluaz4uZmE+LmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYXZiYXItaWNvbi10b3AgLm5hdmJhci1uYXYgLm5hdi1saW5rPi5mYSB7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWljb24tdG9wIC5uYXZiYXItbmF2IC5uYXYtbGluaz4uZmE+LmJhZGdlIHtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUFDMkM7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0yIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    mapboxKey: 'pk.eyJ1Ijoic2NydW1tYXM3M3IiLCJhIjoiY2tvZGNwMDRzMDB4YjJwcG55ZnM3Y2JzdCJ9.veBp1dNJL1FrZdlAUd-sDQ',
    firebase: {
        apiKey: "AIzaSyAUFrEAkZgcxUpviLlbPKx68zaTy6iOa2w",
        authDomain: "vet-website-caa3e.firebaseapp.com",
        databaseURL: "https://vet-website-caa3e-default-rtdb.firebaseio.com",
        projectId: "vet-website-caa3e",
    },
    app: {
        apiBaseUrl: 'https://vet-website-caa3e-default-rtdb.firebaseio.com'
    },
    auth: {
        apiBaseUrl: 'https://identitytoolkit.googleapis.com',
        key: 'AIzaSyAUFrEAkZgcxUpviLlbPKx68zaTy6iOa2w'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H06L":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthInterceptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(request, next) {
        const token = this.authService.getToken();
        //console.log('REQUEST: ', request);
        if (token) {
            request = request.clone({
                url: request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}` : `${request.url}?auth=${token}`
            });
        }
        /*if (token) {
         request = request.clone({
           setHeaders: {
             Authorization: 'Bearer ' + token
           }
         });
       }*/
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            if (err.status === 401) {
                this.handleError();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Error');
        }));
    }
    handleError() {
        this.authService.logout();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('ERROR 401');
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].auth.apiBaseUrl;
        this.key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].auth.key;
    }
    login(body) {
        return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            this.authSuccess(res.idToken, res.localId);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => {
            console.log('Caught in CatchError. Returning 0');
            return "0"; //return from(['A','B','C'])
        }));
    }
    authSuccess(token, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUserId() {
        return localStorage.getItem('userId');
    }
    verifyLogged() {
        const token = localStorage.getItem('token');
        // return token ? true : false;
        return !!token;
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _services_registerauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/registerauth.service */ "W3M0");




class AuthGuard {
    constructor(router, authService, ngAuthService) {
        this.router = router;
        this.authService = authService;
        this.ngAuthService = ngAuthService;
    }
    canActivate(route, state) {
        if (this.ngAuthService.isLoggedIn !== true) {
            this.router.navigate(['login']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_registerauth_service__WEBPACK_IMPORTED_MODULE_3__["RegisterauthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OAQY":
/*!*************************************************!*\
  !*** ./src/app/shared/services/vets.service.ts ***!
  \*************************************************/
/*! exports provided: VetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetsService", function() { return VetsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VetsService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getVetsById(id) {
        return this.http.get(`${this.url}/vets.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
    }
}
VetsService.ɵfac = function VetsService_Factory(t) { return new (t || VetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VetsService, factory: VetsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RSz2":
/*!******************************************************!*\
  !*** ./src/app/pages/products/store/home.actions.ts ***!
  \******************************************************/
/*! exports provided: AddProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const AddProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[HOME]AddProduct', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'vet-patitas';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "W3M0":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/registerauth.service.ts ***!
  \*********************************************************/
/*! exports provided: RegisterauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterauthService", function() { return RegisterauthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RegisterauthService {
    constructor(afs, afAuth, router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userState = user;
                localStorage.setItem('user', JSON.stringify(this.userState));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                //this.router.navigate(['/pages']);
                //console.log('PRUEBAAAAAAAAAAAAAAAAAAAAAAAAA: ', result);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            //window.alert('Parece que esta cuenta no está registrada, verifica las credenciales.')
        });
    }
    SignUp(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            this.SendVerificationMail();
            this.SetUserData(result.user);
        }).catch((error) => {
            this.SendVerificationMail();
            //window.alert("Se ha enviado un mensaje de verificación a su correo electrónico")
        });
    }
    SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
            .then(() => {
            this.router.navigate(['verify-email-address']);
        });
    }
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Te enviamos un correo email para que introduzcas tu nueva contraseña, revisa tu bandeja de entrada');
            this.router.navigate(['login']);
        }).catch((error) => {
            window.alert(error);
        });
    }
    recievedVerificationEmail() {
        return this.afAuth.currentUser.then(u => u)
            .then(() => {
            window.alert('Gracias por verificar tu correo con el enlace en tu bandeja de entrada.');
            this.router.navigate(['login']);
            setTimeout(() => {
                window.location.reload();
            }, 100);
        });
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
    }
    AuthLogin(provider) {
        return this.afAuth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            window.alert(error);
        });
    }
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userState = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            cellphone: user.cellphone,
            address: user.address,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userState, {
            merge: true
        });
    }
}
RegisterauthService.ɵfac = function RegisterauthService_Factory(t) { return new (t || RegisterauthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
RegisterauthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterauthService, factory: RegisterauthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XnmK":
/*!****************************************************!*\
  !*** ./src/app/shared/guards/verify-mail.guard.ts ***!
  \****************************************************/
/*! exports provided: VerifyMailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyMailGuard", function() { return VerifyMailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_previous_route_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/previous-route.service */ "21uT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");
/* harmony import */ var _services_registerauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/registerauth.service */ "W3M0");





class VerifyMailGuard {
    constructor(previousRouteService, router, authService, ngAuthService) {
        this.previousRouteService = previousRouteService;
        this.router = router;
        this.authService = authService;
        this.ngAuthService = ngAuthService;
    }
    canActivate(route, state) {
        if (this.ngAuthService.isLoggedIn == true) {
            this.router.navigate(['pages']);
        }
        else {
            if (this.previousRouteService.getPreviousUrl() === null) {
                this.router.navigate(['login']);
            }
        }
        return true;
    }
}
VerifyMailGuard.ɵfac = function VerifyMailGuard_Factory(t) { return new (t || VerifyMailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_previous_route_service__WEBPACK_IMPORTED_MODULE_1__["PreviousRouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_registerauth_service__WEBPACK_IMPORTED_MODULE_4__["RegisterauthService"])); };
VerifyMailGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VerifyMailGuard, factory: VerifyMailGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YUza":
/*!******************************************************!*\
  !*** ./src/app/pages/products/store/home.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.actions */ "RSz2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const initialState = {
    items: [],
    totalAmount: 0
};
const featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_0__["AddProduct"], (state, { product }) => (Object.assign(Object.assign({}, state), { items: state.items.concat([product]) }))));
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "YxKa":
/*!**********************************************************!*\
  !*** ./src/app/pages/vet-services/store/home.reducer.ts ***!
  \**********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.actions */ "jq28");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const initialState = {
    items: [],
    totalAmount: 0
};
const featureReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_0__["AddVetService"], (state, { vetservice }) => (Object.assign(Object.assign({}, state), { items: state.items.concat([vetservice]) }))));
function reducer(state, action) {
    return featureReducer(state, action);
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptors/auth.interceptor */ "H06L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_services_registerauth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/registerauth.service */ "W3M0");
/* harmony import */ var _shared_services_previous_route_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/previous-route.service */ "21uT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core */ "ey9i");
/* harmony import */ var _shared_guards_verify_mail_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/guards/verify-mail.guard */ "XnmK");
/* harmony import */ var _shared_pipes_dateformat_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/pipes/dateformat.pipe */ "pC6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");



























const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterModule) },
    { path: 'forgot-password', loadChildren: () => Promise.all(/*! import() | forgot-password-forgot-password-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then(m => m.ForgotPasswordModule) },
    {
        path: 'verify-email-address',
        loadChildren: () => __webpack_require__.e(/*! import() | verify-email-verify-email-module */ "verify-email-verify-email-module").then(__webpack_require__.bind(null, /*! ./verify-email/verify-email.module */ "SwEK")).then(m => m.VerifyEmailModule),
        canActivate: [_shared_guards_verify_mail_guard__WEBPACK_IMPORTED_MODULE_21__["VerifyMailGuard"]]
    },
    {
        path: 'pages',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
        _shared_services_registerauth_service__WEBPACK_IMPORTED_MODULE_17__["RegisterauthService"],
        _shared_services_previous_route_service__WEBPACK_IMPORTED_MODULE_18__["PreviousRouteService"],
        _shared_guards_verify_mail_guard__WEBPACK_IMPORTED_MODULE_21__["VerifyMailGuard"],
        _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_core__WEBPACK_IMPORTED_MODULE_20__["reducers"], {})
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shared_pipes_dateformat_pipe__WEBPACK_IMPORTED_MODULE_22__["DateformatPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreRootModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__["PagesRoutingModule"]] }); })();


/***/ }),

/***/ "ey9i":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _pages_products_store_home_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/products/store/home.reducer */ "YUza");
/* harmony import */ var _pages_vet_services_store_home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/vet-services/store/home.reducer */ "YxKa");


const reducers = {
    home: _pages_products_store_home_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    home2: _pages_vet_services_store_home_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};


/***/ }),

/***/ "jq28":
/*!**********************************************************!*\
  !*** ./src/app/pages/vet-services/store/home.actions.ts ***!
  \**********************************************************/
/*! exports provided: AddVetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVetService", function() { return AddVetService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const AddVetService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[HOME]AddVetService', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "kW5i":
/*!******************************************************!*\
  !*** ./src/app/shared/services/providers.service.ts ***!
  \******************************************************/
/*! exports provided: ProvidersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersService", function() { return ProvidersService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProvidersService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getProviderById(id) {
        return this.http.get(`${this.url}/providers.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
    }
}
ProvidersService.ɵfac = function ProvidersService_Factory(t) { return new (t || ProvidersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProvidersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProvidersService, factory: ProvidersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pC6a":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/dateformat.pipe.ts ***!
  \*************************************************/
/*! exports provided: DateformatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateformatPipe", function() { return DateformatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateformatPipe {
    transform(value) {
        this.final = value.split("T", 1);
        return this.final;
    }
}
DateformatPipe.ɵfac = function DateformatPipe_Factory(t) { return new (t || DateformatPipe)(); };
DateformatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "date", type: DateformatPipe, pure: true });


/***/ }),

/***/ "pxv/":
/*!*************************************************!*\
  !*** ./src/app/shared/guards/homeauth.guard.ts ***!
  \*************************************************/
/*! exports provided: HomeauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeauthGuard", function() { return HomeauthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "IYfF");



class HomeauthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const token = this.authService.getToken();
        if (token) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
HomeauthGuard.ɵfac = function HomeauthGuard_Factory(t) { return new (t || HomeauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HomeauthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeauthGuard, factory: HomeauthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_homeauth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/guards/homeauth.guard */ "pxv/");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "99Un")).then(m => m.HomeModule),
                canActivate: [_shared_guards_homeauth_guard__WEBPACK_IMPORTED_MODULE_1__["HomeauthGuard"]]
            },
            { path: 'products', loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("default~my-products-my-products-module~my-vet-services-my-vet-services-module~products-products-modu~e7f62305"), __webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/products.module */ "a1ig")).then(m => m.ProductsModule) },
            { path: 'vet-services', loadChildren: () => Promise.all(/*! import() | vet-services-vet-services-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("default~my-products-my-products-module~my-vet-services-my-vet-services-module~products-products-modu~e7f62305"), __webpack_require__.e("common"), __webpack_require__.e("vet-services-vet-services-module")]).then(__webpack_require__.bind(null, /*! ./vet-services/vet-services.module */ "LG26")).then(m => m.VetServicesModule) },
            { path: 'contact-us', loadChildren: () => __webpack_require__.e(/*! import() | contact-us-contact-us-module */ "contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ./contact-us/contact-us.module */ "QCdY")).then(m => m.ContactUsModule) },
            { path: 'my-products', loadChildren: () => Promise.all(/*! import() | my-products-my-products-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("default~my-products-my-products-module~my-vet-services-my-vet-services-module~products-products-modu~e7f62305"), __webpack_require__.e("common"), __webpack_require__.e("my-products-my-products-module")]).then(__webpack_require__.bind(null, /*! ./my-products/my-products.module */ "dxlZ")).then(m => m.MyProductsModule) },
            { path: 'my-vet-services', loadChildren: () => Promise.all(/*! import() | my-vet-services-my-vet-services-module */[__webpack_require__.e("default~forgot-password-forgot-password-module~login-login-module~my-products-my-products-module~my-~a91ad57e"), __webpack_require__.e("default~my-products-my-products-module~my-vet-services-my-vet-services-module~products-products-modu~e7f62305"), __webpack_require__.e("common"), __webpack_require__.e("my-vet-services-my-vet-services-module")]).then(__webpack_require__.bind(null, /*! ./my-vet-services/my-vet-services.module */ "pPqq")).then(m => m.MyVetServicesModule) },
            { path: 'profile', loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "723k")).then(m => m.ProfileModule) }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _shared_guards_homeauth_guard__WEBPACK_IMPORTED_MODULE_1__["HomeauthGuard"]
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map