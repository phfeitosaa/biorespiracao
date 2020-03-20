webpackJsonp([5],{

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralGlicosePageModule", function() { return GeralGlicosePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_glicose__ = __webpack_require__(471);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_glicose__["a" /* GeralGlicosePage */]),
            ],
        })
    ], GeralGlicosePageModule);
    return GeralGlicosePageModule;
}());

//# sourceMappingURL=geral-glicose.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralGlicosePage; });
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




var GeralGlicosePage = /** @class */ (function () {
    function GeralGlicosePage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl, imageViewerCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    GeralGlicosePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralGlicosePage');
    };
    GeralGlicosePage.prototype.presentImage = function (id) {
        var imageViewer = this._imageViewerCtrl.create(id);
        imageViewer.present();
    };
    GeralGlicosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-glicose',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-glicose\geral-glicose.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DA GLICÓLISE</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide4.png" #slide4 (click)="presentImage(slide4)">\n\n    <h6>Formação de 2NADH: 2NAD⁺ + 4H⁺ + 4e⁻ → 2NADH + 2H⁺ </h6>\n    <h6>Resumo da glicólise: C₆H₁₂O₆ + 2NAD⁺ + 4e⁻ + 4H⁺ + 4ADP + 4Pi → 2NADH + 4ATP + 2H⁺ + 2C₃H₄O₃ </h6>\n    <h6>Consumo de 2ATP: 2ATP → ADP + 2Pi </h6>\n    <h6>Saldo total de 2ATP (4ATP formados – 2ATP gastos).</h6>\n    \n    <a (click)="teste = !teste;"><h5>TESTE (Clique para abrir)</h5></a>\n    \n    <div [hidden]="!teste">\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>01. O investimento, produção e o saldo de ATPs na glicólise é, respectivamente, de:</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list  radio-group no-lines no-padding>\n            <ion-item>\n            <ion-radio value="A"></ion-radio>\n            <ion-label>a) 2ATPs, 3ATPs e 2ATPs.</ion-label>\n            </ion-item>\n            <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n            <ion-radio value=”B”> </ion-radio>\n            <ion-label>b) 2ATPs, 4ATPs e 2ATPs.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”C” ></ion-radio>\n            <ion-label>c) 2ATPs, 5ATPs e 2ATPs.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”D”> </ion-radio>\n            <ion-label>d) 2ATPs, 6ATPs e 2ATPs.</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n  \n      <ion-card>\n          <ion-card-header>\n            <ion-card-title>02. Na glicólise são produzidos:</ion-card-title>\n          </ion-card-header>\n          <ion-card-content >\n          <ion-list radio-group no-lines no-padding>\n              <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n              <ion-radio value="A"></ion-radio>\n              <ion-label>a) 2 NADH.</ion-label>\n              </ion-item>\n              <ion-item>\n              <ion-radio value=”B”> </ion-radio>\n              <ion-label>b) 3 NADH.</ion-label>\n              </ion-item>\n              <ion-item >\n              <ion-radio value=”C” ></ion-radio>\n              <ion-label>c) 4 NADH.</ion-label>\n              </ion-item>\n              <ion-item>\n              <ion-radio value=”D”> </ion-radio>\n              <ion-label>d) 5 NADH.</ion-label>\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>03. A glicólise ocorre no (a):</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item>\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) Matriz mitocondrial.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) Cristas mitocondriais.</ion-label>\n                    </ion-item>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) Citoplasma.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) Membrana interna da mitocôndria.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n        \n        \n        \n      </ion-card-content>\n      </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>04. A glicólise da respiração aeróbia se constitui na quebra ou degradação parcial da molécula de glicose formando:</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) 4ATPs, 2NADH e duas moléculas de ácidos pirúvicos.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) 2ATPs, 2NADH e uma molécula de ácido láctico.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) 4ATPs, 4NADH e duas moléculas de ácidos pirúvicos.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) 2 ATPs, 4 NADH e uma molécula de etanol.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n        \n        \n        \n      </ion-card-content>\n      </ion-card>\n\n      <div margin style="align-content: center; align-items: center; text-align: center;">\n        <button ion-button class="login" expand="full" outline round  (click)="mostrarResultados = !mostrarResultados;">Mostrar Respostas</button>\n      </div>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-glicose\geral-glicose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], GeralGlicosePage);
    return GeralGlicosePage;
}());

//# sourceMappingURL=geral-glicose.js.map

/***/ })

});
//# sourceMappingURL=5.js.map