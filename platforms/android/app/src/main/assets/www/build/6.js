webpackJsonp([6],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralCicloKrebesPageModule", function() { return GeralCicloKrebesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_ciclo_krebes__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeralCicloKrebesPageModule = /** @class */ (function () {
    function GeralCicloKrebesPageModule() {
    }
    GeralCicloKrebesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__geral_ciclo_krebes__["a" /* GeralCicloKrebesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_ciclo_krebes__["a" /* GeralCicloKrebesPage */]),
            ],
        })
    ], GeralCicloKrebesPageModule);
    return GeralCicloKrebesPageModule;
}());

//# sourceMappingURL=geral-ciclo-krebes.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralCicloKrebesPage; });
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



var GeralCicloKrebesPage = /** @class */ (function () {
    function GeralCicloKrebesPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    GeralCicloKrebesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralCicloKrebesPage');
    };
    GeralCicloKrebesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-ciclo-krebes',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-ciclo-krebes\geral-ciclo-krebes.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DO CICLO DE KREBES<br> OU DO ÁCIDO CÍTRICO</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide5.png">\n\n    <h5>Reação do ácido pirúvico com a coenzima A (CoA) ao chegar na matriz mitocondrial:</h5>\n    <h6>2C₃H₄O₃ + 2CoA + 2NAD⁺ → 2C₂H₃O⁺ + 2NADH + 2CO₂ + 2H⁺ </h6>\n    <h5>As oito reações químicas do ciclo de Krebs , terão a participação de moléculas de FAD, que em resumo apresenta a seguinte reação simplificada:</h5>\n    <h6>2C₂H₃O⁺ + 6NAD⁺ + 2FAD + 2H⁺ +2ADP + 2Pi → 6NADH + 2FADH₂ + 2ATP </h6>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-ciclo-krebes\geral-ciclo-krebes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], GeralCicloKrebesPage);
    return GeralCicloKrebesPage;
}());

//# sourceMappingURL=geral-ciclo-krebes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map