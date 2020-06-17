webpackJsonp([7],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeralCadeiaTranspPageModule", function() { return GeralCadeiaTranspPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geral_cadeia_transp__ = __webpack_require__(472);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geral_cadeia_transp__["a" /* GeralCadeiaTranspPage */]),
            ],
        })
    ], GeralCadeiaTranspPageModule);
    return GeralCadeiaTranspPageModule;
}());

//# sourceMappingURL=geral-cadeia-transp.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeralCadeiaTranspPage; });
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




var GeralCadeiaTranspPage = /** @class */ (function () {
    function GeralCadeiaTranspPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl, imageViewerCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    GeralCadeiaTranspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeralCadeiaTranspPage');
    };
    GeralCadeiaTranspPage.prototype.presentImage = function (id) {
        var imageViewer = this._imageViewerCtrl.create(id);
        imageViewer.present();
    };
    GeralCadeiaTranspPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geral-cadeia-transp',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-cadeia-transp\geral-cadeia-transp.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>VISÃO GERAL DA CADEIA <br> TRANSPORTADORA DE <br> ELÉTRONS</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <img src="../../assets/img/slide6.png" #slide6 (click)="presentImage(slide6)">\n\n    <h6>Oxidação do NADH: 10NADH + 10H⁺ + 5O₂ → 10NAD⁺ + 10H₂O </h6>\n    <h6>Oxidação do FADH₂:  2FADH₂ +  O₂ → 2FAD⁺ + 2H₂O </h6>\n    <h6>Quantidade de ATP formado: 28ADP + 28Pi → 28ATP</h6>\n  \n    <a (click)="teste = !teste;"><h5>TESTE (Clique para abrir)</h5></a>\n    \n    <div [hidden]="!teste">\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>01. A fosforilação oxidativa produz:</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list  radio-group no-lines no-padding>\n            <ion-item>\n            <ion-radio value="A"></ion-radio>\n            <ion-label>a) 6 H₂O.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”B”> </ion-radio>\n            <ion-label>b) 8 H₂O.</ion-label>\n            </ion-item>\n            <ion-item>\n            <ion-radio value=”C” ></ion-radio>\n            <ion-label>c) 10 H₂O.</ion-label>\n            </ion-item>\n            <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n            <ion-radio value=”D”> </ion-radio>\n            <ion-label>d) 12 H₂O.</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n  \n      <ion-card>\n          <ion-card-header>\n            <ion-card-title>02. A fosforilação oxidativa (produção de ATP) ocorre no (a):</ion-card-title>\n          </ion-card-header>\n          <ion-card-content >\n          <ion-list radio-group no-lines no-padding>\n              <ion-item>\n              <ion-radio value="A"></ion-radio>\n              <ion-label>a) Matriz mitocondrial.</ion-label>\n              </ion-item>\n              <ion-item>\n              <ion-radio value=”B”> </ion-radio>\n              <ion-label>b) No espaço intermembrana.</ion-label>\n              </ion-item>\n              <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n              <ion-radio value=”C” ></ion-radio>\n              <ion-label>c) Na matriz interna da mitocôndria.</ion-label>\n              </ion-item>\n              <ion-item>\n              <ion-radio value=”D”> </ion-radio>\n              <ion-label>d) Na matriz externa da mitocôndria.</ion-label>\n              </ion-item>\n            </ion-list>\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>03. Sobre os quatro complexos enzimáticos presentes na membrana interna da mitocôndria, é correto afirmar que:</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item>\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) Os prótons H⁺ descarregados pelo NADH e FADH2 são transportados por todos os quatro complexos enzimáticos da matriz mitocondrial para o espaço intermembrana.</ion-label>\n                    </ion-item>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) Os prótons H⁺ atravessam a membrana interna da mitocôndria por três dos quatro complexos proteicos atraídos pelos elétrons que são transferidos de um complexo enzimático para o outro.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) Os elétrons liberados pelas moléculas de NADH e FADH₂ são energizados ao serem transferidos do primeiro complexo enzimático para o último.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) Os prótons presentes no espaço intermembrana só podem retornar a matriz mitocondrial pela sintetase de ATP, não tendo estes nenhuma relação com a termogênese do tecido marrom de mamíferos.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n      </ion-card-content>\n      </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>04. O que promove a rotação da sintetetase de ATP na fosforilação de ADP com Pi é o (a):</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-list  radio-group no-lines no-padding>\n                    <ion-item [class.mostrarReposta]="mostrarResultados" [class.esconderResposta]="!mostrarResultados">\n                    <ion-radio value="A"></ion-radio>\n                    <ion-label>a) Retorno dos prótons H⁺ da espaço intermembrana para matriz mitocondrial, atravessando a sintetase de ATP.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”B”></ion-radio>\n                    <ion-label>b) Transferência de elétrons de um complexo enzimático para outro durante na cadeia transportadora de elétrons.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”C”></ion-radio>\n                    <ion-label>c) Ação redutora do gás oxigênio presente nesta etapa da respiração aeróbia.</ion-label>\n                    </ion-item>\n                    <ion-item>\n                    <ion-radio value=”D”></ion-radio>\n                    <ion-label>d) Passagem de prótons H⁺ da matriz mitocondrial para o espaço intermembrana.</ion-label>\n                    </ion-item>\n                  </ion-list>\n        \n      </ion-card-content>\n      </ion-card>\n\n      <div margin style="align-content: center; align-items: center; text-align: center;">\n        <button ion-button class="login" expand="full" outline round  (click)="mostrarResultados = !mostrarResultados;">Mostrar Respostas</button>\n      </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\geral-cadeia-transp\geral-cadeia-transp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], GeralCadeiaTranspPage);
    return GeralCadeiaTranspPage;
}());

//# sourceMappingURL=geral-cadeia-transp.js.map

/***/ })

});
//# sourceMappingURL=7.js.map