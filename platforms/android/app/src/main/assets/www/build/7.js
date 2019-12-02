webpackJsonp([7],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralCadeiaTranspPageModule", function() { return GeralCadeiaTranspPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_cadeia_transp__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeralCadeiaTranspPageModule = /** @class */ (function () {
    function GeralCadeiaTranspPageModule() {
    }
    GeralCadeiaTranspPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__geral_cadeia_transp__["a" /* GeralCadeiaTranspPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_cadeia_transp__["a" /* GeralCadeiaTranspPage */]),
            ],
        })
    ], GeralCadeiaTranspPageModule);
    return GeralCadeiaTranspPageModule;
}());

//# sourceMappingURL=geral-cadeia-transp.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralCadeiaTranspPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeralCadeiaTranspPage = /** @class */ (function () {
    function GeralCadeiaTranspPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    GeralCadeiaTranspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralCadeiaTranspPage');
    };
    GeralCadeiaTranspPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-cadeia-transp',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-cadeia-transp\geral-cadeia-transp.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DA CADEIA <br> TRANSPORTADORA DE <br> ELÉTRONS</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide6.png">\n\n    <h6>Oxidação do NADH: 10NADH + 10H⁺ + 5O₂ → 10NAD⁺ + 10H₂O </h6>\n    <h6>Oxidação do FADH₂:  2FADH₂ +  O₂ → 2FAD⁺ + 2H₂O </h6>\n    <h6>Quantidade de ATP formado: 28ADP + 28Pi → 28ATP</h6>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-cadeia-transp\geral-cadeia-transp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], GeralCadeiaTranspPage);
    return GeralCadeiaTranspPage;
}());

//# sourceMappingURL=geral-cadeia-transp.js.map

/***/ })

});
//# sourceMappingURL=7.js.map