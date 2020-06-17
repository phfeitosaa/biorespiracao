webpackJsonp([6],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralCicloKrebesPageModule", function() { return GeralCicloKrebesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_ciclo_krebes__ = __webpack_require__(468);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_ciclo_krebes__["a" /* GeralCicloKrebesPage */]),
            ],
        })
    ], GeralCicloKrebesPageModule);
    return GeralCicloKrebesPageModule;
}());

//# sourceMappingURL=geral-ciclo-krebes.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralCicloKrebesPage; });
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




var GeralCicloKrebesPage = /** @class */ (function () {
    function GeralCicloKrebesPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl, imageViewerCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    GeralCicloKrebesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralCicloKrebesPage');
    };
    GeralCicloKrebesPage.prototype.presentImage = function (id) {
        var imageViewer = this._imageViewerCtrl.create(id);
        imageViewer.present();
    };
    GeralCicloKrebesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-ciclo-krebes',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-ciclo-krebes\geral-ciclo-krebes.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DO CICLO DE KREBES<br> OU DO ÁCIDO CÍTRICO</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide5.png" #slide5 (click)="presentImage(slide5)">\n\n    <h5>Reação do ácido pirúvico com a coenzima A (CoA) ao chegar na matriz mitocondrial:</h5>\n    <h6>2C₃H₄O₃ + 2CoA + 2NAD⁺ → 2C₂H₃O⁺ + 2NADH + 2CO₂ + 2H⁺ </h6>\n    <h5>As oito reações químicas do ciclo de Krebs , terão a participação de moléculas de FAD, que em resumo apresenta a seguinte reação simplificada:</h5>\n    <h6>2C₂H₃O⁺ + 6NAD⁺ + 2FAD + 2H⁺ +2ADP + 2Pi → 6NADH + 2FADH₂ + 2ATP </h6>\n\n    <a (click)="teste = !teste;"><h5>TESTE (Clique para abrir)</h5></a>\n    \n    <div [hidden]="!teste">\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>01. No ciclo do ácido cítrico ou ciclo de Krebs, são produzidos:</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list  radio-group no-lines no-padding>\n            <ion-item>\n            <ion-radio value="A"></ion-radio>\n            <ion-label>a) 4 NADH.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”B”> </ion-radio>\n            <ion-label>b) 6 NADH.</ion-label>\n            </ion-item>\n            <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n            <ion-radio value=”C” ></ion-radio>\n            <ion-label>c) 8 NADH.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”D”> </ion-radio>\n            <ion-label>d) 10 NADH.</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n  \n      <ion-card>\n          <ion-card-header>\n            <ion-card-title>02. No ciclo de Krebs são produzidas:</ion-card-title>\n          </ion-card-header>\n          <ion-card-content >\n          <ion-list radio-group no-lines no-padding>\n              <ion-item>\n              <ion-radio value="A"></ion-radio>\n              <ion-label>a) 2 CO₂.</ion-label>\n              </ion-item>\n              <ion-item>\n              <ion-radio value=”B”> </ion-radio>\n              <ion-label>b) 3 CO₂.</ion-label>\n              </ion-item>\n              <ion-item >\n              <ion-radio value=”C” ></ion-radio>\n              <ion-label>c) 4 CO₂.</ion-label>\n              </ion-item>\n              <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n              <ion-radio value=”D”> </ion-radio>\n              <ion-label>d) 6 CO₂.</ion-label>\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>03. No ciclo de Krebs, há a produção de:</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) 2 FADH₂.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) 4 FADH₂.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) 6 FADH₂.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) 8 FADH₂.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n      </ion-card-content>\n      </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>04. Sobre o ciclo de Krebs é correto afirmar que:</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item>\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) Moléculas água são formadas no final desta etapa de respiração aeróbia.</ion-label>\n                    </ion-item>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) Se houver oxigênio nas mitocôndrias, a glicólise produz piruvato que atravessa as membranas da mitocôndria, sendo degrado na matriz mitocondrial.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) As moléculas de coenzima A ( CoA), são consumidas durante a degradação do piruvato.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) O ciclo de Krebs independe da presença de gás oxigênio nas mitocôndrias.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n      </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>05. O ciclo de Krebs tem um saldo energético de:</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list  radio-group no-lines no-padding>\n                <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                <ion-radio value="A"></ion-radio>\n                <ion-label>a) 2 ATPs.</ion-label>\n                </ion-item>\n                <ion-item>\n                <ion-radio value=”B”></ion-radio>\n                <ion-label>b) 4 ATPs.</ion-label>\n                </ion-item>\n                <ion-item>\n                <ion-radio value=”C”></ion-radio>\n                <ion-label>c) 6ATPs.</ion-label>\n                </ion-item>\n                <ion-item>\n                <ion-radio value=”D”></ion-radio>\n                <ion-label>d) 8 ATPs.</ion-label>\n                </ion-item>\n              </ion-list>\n    \n  </ion-card-content>\n  </ion-card>\n\n      <div margin style="align-content: center; align-items: center; text-align: center;">\n        <button ion-button class="login" expand="full" outline round  (click)="mostrarResultados = !mostrarResultados;">Mostrar Respostas</button>\n      </div>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-ciclo-krebes\geral-ciclo-krebes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], GeralCicloKrebesPage);
    return GeralCicloKrebesPage;
}());

//# sourceMappingURL=geral-ciclo-krebes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map