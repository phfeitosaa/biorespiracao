webpackJsonp([10],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhadaFosforilacaoPageModule", function() { return DetalhadaFosforilacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhada_fosforilacao__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhadaFosforilacaoPageModule = /** @class */ (function () {
    function DetalhadaFosforilacaoPageModule() {
    }
    DetalhadaFosforilacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhada_fosforilacao__["a" /* DetalhadaFosforilacaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhada_fosforilacao__["a" /* DetalhadaFosforilacaoPage */]),
            ],
        })
    ], DetalhadaFosforilacaoPageModule);
    return DetalhadaFosforilacaoPageModule;
}());

//# sourceMappingURL=detalhada-fosforilacao.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhadaFosforilacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalhadaFosforilacaoPage = /** @class */ (function () {
    function DetalhadaFosforilacaoPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl, imageViewerCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    DetalhadaFosforilacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhadaFosforilacaoPage');
    };
    DetalhadaFosforilacaoPage.prototype.presentImage = function (id) {
        var imageViewer = this._imageViewerCtrl.create(id);
        imageViewer.present();
    };
    DetalhadaFosforilacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhada-fosforilacao',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\detalhada-fosforilacao\detalhada-fosforilacao.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO DETALHADA DA <br> FOSFORILAÇÃO OXIDATIVA</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <img src="../../assets/img/slide11_1.png" #slide11_1 (click)="presentImage(slide11_1)">\n    <img src="../../assets/img/slide11_2.png" #slide11_2 (click)="presentImage(slide11_2)">\n\n    <a (click)="Membrana = !Membrana;">  <h5>Membrana interna da mitocôndria</h5>\n    </a>\n    \n    <img src="../../assets/img/membrana.gif" [hidden]="!Membrana" #membrana (click)="presentImage(membrana)">\n\n    <a (click)="Complexos = !Complexos; proteina1 = false; proteina2 = false; proteina3 = false; proteina4 = false;">  <h5>Complexos enzimáticos I, II, III e IV</h5>\n    </a>\n\n    <img src="../../assets/img/tabela19.png" [hidden]="!Complexos" #tabela19 (click)="presentImage(tabela19)">\n    \n    <a [hidden]="!Complexos" (click)="proteina1 = !proteina1; proteina2 = false; proteina3 = false; proteina4 = false;">  <h6>I.   NADH-desidrogenase</h6></a>\n    <img src="../../assets/img/complexo1_1.png" [hidden]="!proteina1" #complexo1_1 (click)="presentImage(complexo1_1)">\n    <img src="../../assets/img/complexo1_2.png" [hidden]="!proteina1" #complexo1_2 (click)="presentImage(complexo1_2)">\n    <a [hidden]="!Complexos" (click)="proteina2 = !proteina2; proteina1 = false; proteina3 = false; proteina4 = false;">  <h6>II.  Succinato-desidrogenase</h6></a>\n    <img src="../../assets/img/complexo2.png" [hidden]="!proteina2" #complexo2 (click)="presentImage(complexo2)">\n    <a [hidden]="!Complexos" (click)="proteina3 = !proteina3; proteina1 = false; proteina2 = false; proteina4 = false;">  <h6>III. Ubiquinona</h6></a>\n    <img src="../../assets/img/complexo3_1.png" [hidden]="!proteina3" #complexo3_1 (click)="presentImage(complexo3_1)">\n    <img src="../../assets/img/complexo3_2.png" [hidden]="!proteina3" #complexo3_2 (click)="presentImage(complexo3_2)">\n    <a [hidden]="!Complexos" (click)="proteina4 = !proteina4; proteina1 = false; proteina2 = false; proteina3 = false;">  <h6>IV.  Citocromo-oxidase</h6></a>\n    <img src="../../assets/img/complexo4_1.png" [hidden]="!proteina4" #complexo4_1 (click)="presentImage(complexo4_1)">\n    <img src="../../assets/img/complexo4_2.png" [hidden]="!proteina4" #complexo4_2 (click)="presentImage(complexo4_2)">\n\n\n    <img src="../../assets/img/fim.png" [hidden]="!Complexos" #fim (click)="presentImage(fim)">\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\detalhada-fosforilacao\detalhada-fosforilacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], DetalhadaFosforilacaoPage);
    return DetalhadaFosforilacaoPage;
}());

//# sourceMappingURL=detalhada-fosforilacao.js.map

/***/ })

});
//# sourceMappingURL=10.js.map