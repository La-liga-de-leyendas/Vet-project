(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "2qjx":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/products.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductsService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getProducts() {
        return this.http.get(`${this.url}/products.json`);
    }
    getProductsById(id) {
        return this.http.get(`${this.url}/products.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
    }
    addProducts(product) {
        return this.http.post(`${this.url}/products.json`, product);
    }
    deleteProducts(id) {
        return this.http.delete(`${this.url}/products/${id}.json`);
    }
    updateProducts(id, product) {
        return this.http.put(`${this.url}/products/${id}.json`, product);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac });


/***/ }),

/***/ "7qeK":
/*!********************************************************!*\
  !*** ./src/app/shared/services/vet-booking.service.ts ***!
  \********************************************************/
/*! exports provided: VetBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetBookingService", function() { return VetBookingService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VetBookingService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getVetBookingById(id) {
        return this.http.get(`${this.url}/VetBookings.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
    }
    addVetBooking(booking) {
        return this.http.post(`${this.url}/VetBookings.json`, booking);
    }
    getVetBooking() {
        return this.http.get(`${this.url}/VetBookingss.json`);
    }
}
VetBookingService.ɵfac = function VetBookingService_Factory(t) { return new (t || VetBookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VetBookingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VetBookingService, factory: VetBookingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EHIG":
/*!********************************************************!*\
  !*** ./src/app/shared/services/vetservices.service.ts ***!
  \********************************************************/
/*! exports provided: VetServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetServicesService", function() { return VetServicesService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VetServicesService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getVetServices() {
        return this.http.get(`${this.url}/services.json`);
    }
    getVetServicesById(id) {
        return this.http.get(`${this.url}/services.json?orderBy="storeId"&equalTo="${id}"&print=pretty`);
    }
    addServices(service) {
        return this.http.post(`${this.url}/services.json`, service);
    }
    deleteServices(id) {
        return this.http.delete(`${this.url}/services/${id}.json`);
    }
    updateServices(id, service) {
        return this.http.put(`${this.url}/services/${id}.json`, service);
    }
}
VetServicesService.ɵfac = function VetServicesService_Factory(t) { return new (t || VetServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VetServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VetServicesService, factory: VetServicesService.ɵfac });


/***/ }),

/***/ "WGQ8":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/products-buyed.service.ts ***!
  \***********************************************************/
/*! exports provided: ProductsBuyedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsBuyedService", function() { return ProductsBuyedService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductsBuyedService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getProductsBuyedById(id) {
        return this.http.get(`${this.url}/ProductsBuyed.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
    }
    addProductsToBuy(product) {
        return this.http.post(`${this.url}/ProductsBuyed.json`, product);
    }
    getProductsBuyed() {
        return this.http.get(`${this.url}/ProductsBuyed.json`);
    }
}
ProductsBuyedService.ɵfac = function ProductsBuyedService_Factory(t) { return new (t || ProductsBuyedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductsBuyedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductsBuyedService, factory: ProductsBuyedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].app.apiBaseUrl;
    }
    getUsers() {
        return this.http.get(`${this.url}/users.json`);
    }
    addUsers(user) {
        return this.http.post(`${this.url}/users.json`, user);
    }
    getIdUser(id) {
        return this.http.get(`${this.url}/users.json?orderBy="uui"&equalTo="${id}"&print=pretty`);
    }
    updateProducts(id, product) {
        return this.http.put(`${this.url}/users/${id}.json`, product);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map