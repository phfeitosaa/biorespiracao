webpackJsonp([8],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtapasRespAerobicaPageModule", function() { return EtapasRespAerobicaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etapas_resp_aerobica__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EtapasRespAerobicaPageModule = /** @class */ (function () {
    function EtapasRespAerobicaPageModule() {
    }
    EtapasRespAerobicaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__etapas_resp_aerobica__["a" /* EtapasRespAerobicaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__etapas_resp_aerobica__["a" /* EtapasRespAerobicaPage */]),
            ],
        })
    ], EtapasRespAerobicaPageModule);
    return EtapasRespAerobicaPageModule;
}());

//# sourceMappingURL=etapas-resp-aerobica.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtapasRespAerobicaPage; });
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




var EtapasRespAerobicaPage = /** @class */ (function () {
    function EtapasRespAerobicaPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl, imageViewerCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    EtapasRespAerobicaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EtapasRespAerobicaPage');
    };
    EtapasRespAerobicaPage.prototype.presentImage = function (id) {
        var imageViewer = this._imageViewerCtrl.create(id);
        imageViewer.present();
    };
    EtapasRespAerobicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-etapas-resp-aerobica',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\etapas-resp-aerobica\etapas-resp-aerobica.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>ETAPAS DA RESPIRAÇÃO <br> AERÓBIA</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n<img src="../../assets/img/mitocondria.png" #img1 (click)="presentImage(img1)">\n<a (click)="citoplasma = !citoplasma;"><h5>1. Citoplasma</h5></a>\n<p [hidden]="!citoplasma">Glicólise: Série de dez reações químicas que fragmentam a glicose originando no final do processo duas moléculas de piruvato (C₃H₄O₃):  . Ocorre no citoplasma.</p>\n\n<a (click)="mitocondria = !mitocondria; fosforilacao = false; mitocondria2 = false; atp = false; atpgif = false;"><h5>2. Mitocôndria</h5></a>\n<img src="../../assets/img/mitocondria2.png" [hidden]="!mitocondria" #img2 (click)="presentImage(img2)">\n<p [hidden]="!mitocondria">Ciclo de Krebs ou do ácido cítrico: Ciclo que envolve oito reações químicas que completam a quebra metabólica da glicose. Ocorre no interior das mitocôndrias.</p>\n\n<a (click)="fosforilacao = !fosforilacao; mitocondria2 = false; atp = false; atpgif = false;"><h5 [hidden]="!mitocondria">3. Membrana interna com a ATP sintetase</h5></a>\n<p [hidden]="!fosforilacao">Fosforilação oxidativa: Produção de ATP usando a energia derivada de reações redox de uma cadeia transportadora de elétrons. Ocorre na membrana interna da \n<a (click)="mitocondria2 = !mitocondria2;">mitocôndria</a>.</p>\n<img src="../../assets/img/mitocondria.gif" [hidden]="!mitocondria2" #img3 (click)="presentImage(img3)">\n<br>\n<a (click)="atp = !atp; atpgif = false;"><h5 [hidden]="!fosforilacao">4. ATP Sintase</h5></a>\n<p [hidden]="!atp">Local aonde ocorre a passagem de prótons do espaço intermembrana para a matriz mitocondrial produzindo ATP devido as diferenças de gradiente de concentração maior no espaço intermembrana. O componente F₀ está incrustrado na membrana interna da mitocôndria enquanto que o componente F₁ está na matriz mitocondrial.</p>\n<a (click)="atpgif = !atpgif;" [hidden]="!atp">Animação</a>\n<img src="../../assets/img/atp-sintase.gif" [hidden]="!atpgif" #img4 (click)="presentImage(img4)">\n\n<br>\n<br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\etapas-resp-aerobica\etapas-resp-aerobica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], EtapasRespAerobicaPage);
    return EtapasRespAerobicaPage;
}());

//# sourceMappingURL=etapas-resp-aerobica.js.map

/***/ })

});
//# sourceMappingURL=8.js.map