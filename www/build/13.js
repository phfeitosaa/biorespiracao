webpackJsonp([13],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesImportantesPageModule", function() { return DefinicoesImportantesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__definicoes_importantes__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DefinicoesImportantesPageModule = /** @class */ (function () {
    function DefinicoesImportantesPageModule() {
    }
    DefinicoesImportantesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__definicoes_importantes__["a" /* DefinicoesImportantesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__definicoes_importantes__["a" /* DefinicoesImportantesPage */]),
            ],
        })
    ], DefinicoesImportantesPageModule);
    return DefinicoesImportantesPageModule;
}());

//# sourceMappingURL=definicoes-importantes.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinicoesImportantesPage; });
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



var DefinicoesImportantesPage = /** @class */ (function () {
    function DefinicoesImportantesPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    DefinicoesImportantesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DefinicoesImportantesPage');
    };
    DefinicoesImportantesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-definicoes-importantes',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\definicoes-importantes\definicoes-importantes.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-buttons left>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>DEFINIÇÕES IMPORTANTES <br> SOBRE RESPIRAÇÃO </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <a (click)="mostrarResp1 = !mostrarResp1;"><h5>1. Respiração celular</h5></a>\n  <p [hidden]="!mostrarResp1">Processo energético de obtenção de energia química na forma de ATP a partir da degradação de moléculas orgânicas como a glicose.\n  </p>\n\n  <a (click)="mostrarResp2 = !mostrarResp2;"><h5>2. Respiração aeróbia</h5></a>\n  <p [hidden]="!mostrarResp2">Processo de obtenção de energia química em que o aceptor final de elétrons é o gás oxigênio (O2).\n  </p>\n\n  <a (click)="mostrarResp3 = !mostrarResp3;"><h5>3. Energia química</h5></a>\n  <p [hidden]="!mostrarResp3">Energia disponível nas biomoléculas para ser liberada em uma reação química.\n  </p>\n\n  <a (click)="mostrarResp4 = !mostrarResp4;"><h5>4. Glicose</h5></a>\n  <p [hidden]="!mostrarResp4">Carboidrato de fórmula molecular (C6H12O6), fabricado pelos vegetais durantes a fotossíntese.\n  </p>\n\n  <a (click)="mostrarResp5 = !mostrarResp5;"><h5>5. Fotossíntese</h5></a>\n  <p [hidden]="!mostrarResp5">Processo energético realizado por plantas, alguns protoctistas e alguns procariontes com a utilização de energia luminosa, gás carbônico  (CO2) e água (H2O).\n  </p>\n\n  <a (click)="mostrarResp6 = !mostrarResp6;"><h5>6. Carboidrato</h5></a>\n  <p [hidden]="!mostrarResp6">Molécula orgânica formada principalmente por carbono (C), hidrogênio (H) e oxigênio (O).\n  </p>\n\n  <a (click)="mostrarResp7 = !mostrarResp7;"><h5>7. Adenina Trifosfato (ATP)</h5></a>\n  <p [hidden]="!mostrarResp7">Molécula orgânica formada por um nucleotídeo de adenina - A (C₅H₅N₅), uma ribose  (C5H10O5) e três fosfatos inorgânicos (Pi).\n  </p>\n\n  <a (click)="mostrarResp8 = !mostrarResp8;"><h5>8. Adenina Difosfato (ADP)</h5></a>\n  <p [hidden]="!mostrarResp8">Molécula orgânica formada por um nucleotídeo de adenina A (C₅H₅N₅), uma ribose e dois fosfatos inorgânicos (Pi).\n  </p>\n\n  <a (click)="mostrarResp9 = !mostrarResp9;"><h5>9. Mitocôndria</h5></a>\n  <p [hidden]="!mostrarResp9">Organela celular que contém seu próprio DNA e é responsável pela produção de energia (ATP).\n  </p>\n\n  <a (click)="mostrarResp10 = !mostrarResp10;"><h5>10. Nicotinamida Adenina Dinucleotídeo - NAD  (C21H27N7O14P2) </h5></a>\n  <p [hidden]="!mostrarResp10">Transportador de elétrons. É formado a partir ADP + vitamina B₃ (PP, nicotinamida ou niacina).\n  </p>\n\n  <a (click)="mostrarResp11 = !mostrarResp11;"><h5>11. Flavina Adenina Dinucleotídeo - FAD (C27H33N9O15P2 ): \n  </h5></a>\n  <p [hidden]="!mostrarResp11">Transportador de elétrons. É formada por ADP + vitamina B₂ (riboflavina).\n  </p>\n\n  <a (click)="mostrarResp12 = !mostrarResp12;"><h5>12. Reações redox</h5></a>\n  <p [hidden]="!mostrarResp12">Transferência de elétrons de uma substância para outra.\n  </p>\n\n  <a (click)="mostrarResp13 = !mostrarResp13;"><h5>13. Redução</h5></a>\n  <p [hidden]="!mostrarResp13">Ganho de um ou mais elétrons por um átomo, íon ou molécula.\n  </p>\n\n  <a (click)="mostrarResp14 = !mostrarResp14;"><h5>14. Oxidação</h5></a>\n  <p [hidden]="!mostrarResp14">Perda de um ou mais elétrons por uma átomo, íon ou molécula.\n  </p>\n\n  <a (click)="mostrarResp15 = !mostrarResp15;"><h5>15. Agente oxidante</h5></a>\n  <p [hidden]="!mostrarResp15">Aquele que recebeu elétrons e foi reduzido.\n  </p>\n\n  <a (click)="mostrarResp16 = !mostrarResp16;"><h5>16. Agente Redutor</h5></a>\n  <p [hidden]="!mostrarResp16">Aquele que doou ou perdeu elétrons e foi oxidado.\n  </p>\n\n  <a (click)="mostrarResp17 = !mostrarResp17;"><h5>17. Piruvato (C3H4O3)</h5></a>\n  <p [hidden]="!mostrarResp17">Molécula resultante da glicólise.\n  </p>\n\n  <a (click)="mostrarResp18 = !mostrarResp18;"><h5>18. Pi</h5></a>\n  <p [hidden]="!mostrarResp18">Fosfato inorgânico.\n  </p>\n\n  <a (click)="mostrarResp19 = !mostrarResp19;"><h5>19. Acetil (C₂H₃O)</h5></a>\n  <p [hidden]="!mostrarResp19">Composto intermediário formado pela após a liberação de um C do piruvato para a formação de gás carbônico.\n\n  </p>\n\n  <a (click)="mostrarResp20= !mostrarResp20;"><h5>20. Coenzima A (C₂₁H₃₆N₇O₁₆P₃S): </h5></a>\n  <p [hidden]="!mostrarResp20">substância formada a partir de ADP + vitamina B₅ (ácido pantotênico).\n  </p>\n\n  <br>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\definicoes-importantes\definicoes-importantes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DefinicoesImportantesPage);
    return DefinicoesImportantesPage;
}());

//# sourceMappingURL=definicoes-importantes.js.map

/***/ })

});
//# sourceMappingURL=13.js.map