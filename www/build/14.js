webpackJsonp([14],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextRespAerobicaPageModule", function() { return ContextRespAerobicaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context_resp_aerobica__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContextRespAerobicaPageModule = /** @class */ (function () {
    function ContextRespAerobicaPageModule() {
    }
    ContextRespAerobicaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__context_resp_aerobica__["a" /* ContextRespAerobicaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__context_resp_aerobica__["a" /* ContextRespAerobicaPage */]),
            ],
        })
    ], ContextRespAerobicaPageModule);
    return ContextRespAerobicaPageModule;
}());

//# sourceMappingURL=context-resp-aerobica.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextRespAerobicaPage; });
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



/**
 * Generated class for the ContextRespAerobicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContextRespAerobicaPage = /** @class */ (function () {
    function ContextRespAerobicaPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ContextRespAerobicaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContextRespAerobicaPage');
    };
    ContextRespAerobicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-context-resp-aerobica',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\context-resp-aerobica\context-resp-aerobica.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>CONTEXTUALIZANDO A <br> RESPIRAÇÃO AERÓBIA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>A respiração aeróbia é um processo energético realizado por seres vivos eucariontes que envolve o \n    catabolismo (processo exergônico) de moléculas orgânicas. O referido processo tem início no \n    citoplasma celular quando as células recebem moléculas orgânicas como a glicose e/ou ácidos \n    graxos. Para melhor compreensão do processo e das etapas da respiração aeróbia, será demonstrado \n    o que ocorre quando uma célula recebe moléculas de glicose oriundas do processo de nutrição \n    realizado pelos seres vivos, sejam por meio de mecanismos autotróficos ou heterotróficos na \n    produção de <a (click)="mostrarATP = !mostrarATP;">ATP</a>. \n    <img src="../../assets/img/queen-live.png" [hidden]="!mostrarATP"> \n    <br>É importante lembrar que os açúcares degradados durantes as etapas da respiração aeróbia, são \n    produzidos pelos seres autotróficos, sendo a <a (click)="mostrarFotossintese = !mostrarFotossintese;"> fotossíntese </a> \n    <img src="../../assets/img/queen-live.png" [hidden]="!mostrarFotossintese"> \n    o principal processo anabólico (processo endergônico) de produção e, portanto, de armazenamento inicial \n    de energia química a ser transferida por meio do fluxo de energia e matéria nos demais níveis tróficos \n    das cadeias alimentares do planeta Terra. \n    </p> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\context-resp-aerobica\context-resp-aerobica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ContextRespAerobicaPage);
    return ContextRespAerobicaPage;
}());

//# sourceMappingURL=context-resp-aerobica.js.map

/***/ })

});
//# sourceMappingURL=14.js.map