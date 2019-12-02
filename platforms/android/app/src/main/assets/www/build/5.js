webpackJsonp([5],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralGlicosePageModule", function() { return GeralGlicosePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_glicose__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeralGlicosePageModule = /** @class */ (function () {
    function GeralGlicosePageModule() {
    }
    GeralGlicosePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__geral_glicose__["a" /* GeralGlicosePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_glicose__["a" /* GeralGlicosePage */]),
            ],
        })
    ], GeralGlicosePageModule);
    return GeralGlicosePageModule;
}());

//# sourceMappingURL=geral-glicose.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralGlicosePage; });
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



var GeralGlicosePage = /** @class */ (function () {
    function GeralGlicosePage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    GeralGlicosePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralGlicosePage');
    };
    GeralGlicosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-glicose',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-glicose\geral-glicose.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DA GLICÓLISE</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide4.png">\n\n    <h6>Formação de 2NADH: 2NAD⁺ + 4H⁺ + 4e⁻ → 2NADH + 2H⁺ </h6>\n    <h6>Resumo da glicólise: C₆H₁₂O₆ + 2NAD⁺ + 4e⁻ + 4H⁺ + 4ADP + 4Pi → 2NADH + 4ATP + 2H⁺ + 2C₃H₄O₃ </h6>\n    <h6>Consumo de 2ATP: 2ATP → ADP + 2Pi </h6>\n    <h6>Saldo total de 2ATP (4ATP formados – 2ATP gastos).</h6>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-glicose\geral-glicose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], GeralGlicosePage);
    return GeralGlicosePage;
}());

//# sourceMappingURL=geral-glicose.js.map

/***/ })

});
//# sourceMappingURL=5.js.map