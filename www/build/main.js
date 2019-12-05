webpackJsonp([14],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/context-resp-aerobica/context-resp-aerobica.module": [
		332,
		13
	],
	"../pages/definicoes-importantes/definicoes-importantes.module": [
		333,
		12
	],
	"../pages/detalhada-ciclo-krebs/detalhada-ciclo-krebs.module": [
		334,
		11
	],
	"../pages/detalhada-fosforilacao/detalhada-fosforilacao.module": [
		335,
		10
	],
	"../pages/detalhada-glicose/detalhada-glicose.module": [
		336,
		9
	],
	"../pages/etapas-resp-aerobica/etapas-resp-aerobica.module": [
		337,
		8
	],
	"../pages/geral-cadeia-transp/geral-cadeia-transp.module": [
		338,
		7
	],
	"../pages/geral-ciclo-krebes/geral-ciclo-krebes.module": [
		339,
		6
	],
	"../pages/geral-glicose/geral-glicose.module": [
		340,
		5
	],
	"../pages/geral-resp-aerobica/geral-resp-aerobica.module": [
		341,
		4
	],
	"../pages/list-master/list-master.module": [
		342,
		3
	],
	"../pages/mitocondria/mitocondria.module": [
		343,
		2
	],
	"../pages/producao-atp/producao-atp.module": [
		344,
		1
	],
	"../pages/sumario/sumario.module": [
		185
	],
	"../pages/testes/testes.module": [
		345,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumarioPageModule", function() { return SumarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sumario__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SumarioPageModule = /** @class */ (function () {
    function SumarioPageModule() {
    }
    SumarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sumario__["a" /* SumarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__sumario__["a" /* SumarioPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__sumario__["a" /* SumarioPage */]
            ]
        })
    ], SumarioPageModule);
    return SumarioPageModule;
}());

//# sourceMappingURL=sumario.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_vibration__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sumario_sumario_module__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sumario_sumario_module__["SumarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/context-resp-aerobica/context-resp-aerobica.module#ContextRespAerobicaPageModule', name: 'ContextRespAerobicaPage', segment: 'context-resp-aerobica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/definicoes-importantes/definicoes-importantes.module#DefinicoesImportantesPageModule', name: 'DefinicoesImportantesPage', segment: 'definicoes-importantes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhada-ciclo-krebs/detalhada-ciclo-krebs.module#DetalhadaCicloKrebsPageModule', name: 'DetalhadaCicloKrebsPage', segment: 'detalhada-ciclo-krebs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhada-fosforilacao/detalhada-fosforilacao.module#DetalhadaFosforilacaoPageModule', name: 'DetalhadaFosforilacaoPage', segment: 'detalhada-fosforilacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhada-glicose/detalhada-glicose.module#DetalhadaGlicosePageModule', name: 'DetalhadaGlicosePage', segment: 'detalhada-glicose', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/etapas-resp-aerobica/etapas-resp-aerobica.module#EtapasRespAerobicaPageModule', name: 'EtapasRespAerobicaPage', segment: 'etapas-resp-aerobica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geral-cadeia-transp/geral-cadeia-transp.module#GeralCadeiaTranspPageModule', name: 'GeralCadeiaTranspPage', segment: 'geral-cadeia-transp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geral-ciclo-krebes/geral-ciclo-krebes.module#GeralCicloKrebesPageModule', name: 'GeralCicloKrebesPage', segment: 'geral-ciclo-krebes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geral-glicose/geral-glicose.module#GeralGlicosePageModule', name: 'GeralGlicosePage', segment: 'geral-glicose', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geral-resp-aerobica/geral-resp-aerobica.module#GeralRespAerobicaPageModule', name: 'GeralRespAerobicaPage', segment: 'geral-resp-aerobica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mitocondria/mitocondria.module#MitocondriaPageModule', name: 'MitocondriaPage', segment: 'mitocondria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producao-atp/producao-atp.module#ProducaoAtpPageModule', name: 'ProducaoAtpPage', segment: 'producao-atp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sumario/sumario.module#SumarioPageModule', name: 'SumarioPage', segment: 'sumario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testes/testes.module#TestesPageModule', name: 'TestesPage', segment: 'testes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_vibration__["a" /* Vibration */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(136);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(183);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User.prototype.profile_update = function () {
        var profileDetails = [
            {
                full_name: "Sibabrat Swain",
                about: "I am working in NTT . ",
                profile_image: "asset/img/src/img.jpg",
                followers: 230,
                following: 170,
                user_name: "sibabratswain",
                password: 'July 8, 1954',
                email: 'sibabrat.swain@constacloud.net',
                state: 'Odisha',
            },
        ];
        return profileDetails;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumarioPage; });
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



var SumarioPage = /** @class */ (function () {
    function SumarioPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    /**
     * Navigate to the detail page for this item.
     */
    SumarioPage.prototype.abrirCap1 = function () {
        this.navCtrl.push('ContextRespAerobicaPage');
    };
    SumarioPage.prototype.abrirCap2 = function () {
        this.navCtrl.push('DefinicoesImportantesPage');
    };
    SumarioPage.prototype.abrirCap3 = function () {
        this.navCtrl.push('EtapasRespAerobicaPage');
    };
    SumarioPage.prototype.abrirCap4 = function () {
        this.navCtrl.push('GeralRespAerobicaPage');
    };
    SumarioPage.prototype.abrirCap5 = function () {
        this.navCtrl.push('GeralGlicosePage');
    };
    SumarioPage.prototype.abrirCap6 = function () {
        this.navCtrl.push('GeralCicloKrebesPage');
    };
    SumarioPage.prototype.abrirCap7 = function () {
        this.navCtrl.push('GeralCadeiaTranspPage');
    };
    SumarioPage.prototype.abrirCap8 = function () {
        this.navCtrl.push('ProducaoAtpPage');
    };
    SumarioPage.prototype.abrirCap9 = function () {
        this.navCtrl.push('MitocondriaPage');
    };
    SumarioPage.prototype.abrirCap10 = function () {
        this.navCtrl.push('DetalhadaGlicosePage');
    };
    SumarioPage.prototype.abrirCap11 = function () {
        this.navCtrl.push('DetalhadaCicloKrebsPage');
    };
    SumarioPage.prototype.abrirCap12 = function () {
        this.navCtrl.push('DetalhadaFosforilacaoPage');
    };
    SumarioPage.prototype.abrirCap13 = function () {
        this.navCtrl.push('TestesPage');
    };
    SumarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sumario',template:/*ion-inline-start:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\sumario\sumario.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>SUMÁRIO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    \n    <ion-item (click)="abrirCap1()">\n    \n      <h2>CONTEXTUALIZANDO A RESPIRAÇÃO<br> AERÓBIA </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap2()">\n        \n      <h2>DEFINIÇÕES IMPORTANTES SOBRE <br> RESPIRAÇÃO NA FORMA DE PERGUNTAS </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap3()">\n        \n      <h2>ETAPAS DA RESPIRAÇÃO AERÓBIA</h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap4()">\n        \n      <h2>VISÃO GERAL DA RESPIRAÇÃO <br> AERÓBIA </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap5()">\n        \n      <h2>VISÃO GERAL DA GLICÓLISE </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap6()">\n        \n      <h2>VISÃO GERAL DO CICLO DE KREBES<br> OU DO ÁCIDO CÍTRICO </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap7()">\n        \n      <h2>VISÃO GERAL DA CADEIA <br> TRANSPORTADORA DE ELÉTRONS</h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap8()">\n        \n      <h2>PRODUÇÃO DE ATP A PARTIR <br> DA OXIDAÇÃO COMPLETA DA GLICOSE</h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap9()">\n        \n      <h2>MITOCÔNDRIA</h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap10()">\n        \n      <h2>VISÃO DETALHADA DA GLICÓLISE </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap11()">\n        \n      <h2>VISÃO DETALHADA DO CICLO DE KREBS </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap12()">\n        \n      <h2>VISÃO DETALHADA DA FOSFORILAÇÃO<br> OXIDATIVA </h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n    <ion-item (click)="abrirCap13()">\n        \n      <h2>TESTES</h2>\n      <ion-icon item-end ios="ios-checkmark" md="md-checkmark" class="nextDiff"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n\n  \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\paulo\Ionic\BioRespiracao\src\pages\sumario\sumario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SumarioPage);
    return SumarioPage;
}());

//# sourceMappingURL=sumario.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    // {title: 'TESTES', component: 'TestesPage'}
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, toastCtrl, loadingCtrl) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Sumario', component: 'SumarioPage' },
            { title: 'CONTEXTUALIZANDO A RESPIRAÇÃO AERÓBIA', component: 'ContextRespAerobicaPage' },
            { title: 'DEFINIÇÕES IMPORTANTES SOBRE RESPIRAÇÃO NA FORMA DE PERGUNTAS', component: 'DefinicoesImportantesPage' },
            { title: 'ETAPAS DA RESPIRAÇÃO AERÓBIA', component: 'EtapasRespAerobicaPage' },
            { title: 'VISÃO GERAL DA RESPIRAÇÃO AERÓBIA', component: 'GeralRespAerobicaPage' },
            { title: 'VISÃO GERAL DA GLICÓLISE', component: 'GeralGlicosePage' },
            { title: 'VISÃO GERAL DO CICLO DE KREBES OU DO ÁCIDO CÍTRICO', component: 'GeralCicloKrebesPage' },
            { title: 'VISÃO GERAL DA CADEIA TRANSPORTADORA DE ELÉTRONS', component: 'GeralCadeiaTranspPage' },
            { title: 'PRODUÇÃO DE ATP A PARTIR DA OXIDAÇÃO COMPLETA DA GLICOSE', component: 'ProducaoAtpPage' },
            { title: 'MITOCÔNDRIA', component: 'MitocondriaPage' },
            { title: 'VISÃO DETALHADA DA GLICÓLISE', component: 'DetalhadaGlicosePage' },
            { title: 'VISÃO DETALHADA DO CICLO DE KREBS', component: 'DetalhadaCicloKrebsPage' },
            { title: 'VISÃO DETALHADA DA FOSFORILAÇÃO<br> OXIDATIVA', component: 'DetalhadaFosforilacaoPage' },
            { title: 'TESTES', component: 'TestesPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#1ABC9C');
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Aguarde, carregando...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.nav.setRoot(page.component);
            _this.activePage = page;
            console.log(page.component);
        }, 1000);
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'side-main-menu',
            template: "<ion-menu [content]=\"content\">\n      <ion-header class=\"headerMAin\">\n        <ion-toolbar color=\"white\">\n        <ion-list class=\"headerMAin\">\n        <ion-item style=\"background: white !important;border-bottom: 0.55px solid #000000!important;\">\n          <ion-list class=\"logoImage\" menuClose (click)=\"openPage(pages[4])\">\n            <div class=\"circle-pic\" text-center #profilePic [style.background-image]=\"'url(../../assets/img/mestrado-logo.png)'\"></div>\n            <!--<img class=\"circle-pic\" src=\"../../assets/img/mestrado.jpg\"/>-->\n          </ion-list>\n          <h1 class=\"userName\">Bio Respira\u00E7\u00E3o</h1>\n          <h3 class=\"userDetails\">Antonio Delm\u00E1rio Alves dos Santos</h3>\n        </ion-item>\n      </ion-list>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class=\"sideMenuIoncContent\">\n        \n        <ion-list>\n          \n        <button menuClose ion-item no-lines style=\"border-top: 0.55px solid #383838; !important;\"\n                [class.activeHIghlight]=\"checkActive(pages[0])\" (click)=\"openPage(pages[0])\" class=\"buttonSIdeBAr\">\n                <h6>SUM\u00C1RIO</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[1])\"\n                (click)=\"openPage(pages[1])\" class=\"buttonSIdeBAr\">\n                <h6>CONTEXTUALIZANDO A RESPIRA\u00C7\u00C3O <br> AER\u00D3BIA</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[2])\"\n                (click)=\"openPage(pages[2])\" class=\"buttonSIdeBAr\">\n                <h6>DEFINI\u00C7\u00D5ES IMPORTANTES SOBRE <br> RESPIRA\u00C7\u00C3O</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[3])\"\n                (click)=\"openPage(pages[3])\" class=\"buttonSIdeBAr\">\n                <h6>ETAPAS DA RESPIRA\u00C7\u00C3O AER\u00D3BIA</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[4])\"\n                (click)=\"openPage(pages[4])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O GERAL DA RESPIRA\u00C7\u00C3O <br> AER\u00D3BIA </h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[5])\"\n                (click)=\"openPage(pages[5])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O GERAL DA GLIC\u00D3LISE</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[6])\"\n                (click)=\"openPage(pages[6])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O GERAL DO CICLO DE KREBES<br> OU DO \u00C1CIDO C\u00CDTRICO</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[7])\"\n                (click)=\"openPage(pages[7])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O GERAL DA CADEIA <br> TRANSPORTADORA DE EL\u00C9TRONS</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[8])\"\n                (click)=\"openPage(pages[8])\" class=\"buttonSIdeBAr\">\n                <h6>PRODU\u00C7\u00C3O DE ATP A PARTIR <br> DA OXIDA\u00C7\u00C3O COMPLETA DA GLICOSE</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[9])\"\n                (click)=\"openPage(pages[9])\" class=\"buttonSIdeBAr\">\n                <h6>MITOC\u00D4NDRIA</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[10])\"\n                (click)=\"openPage(pages[10])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O DETALHADA DA GLIC\u00D3LISE</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[11])\"\n                (click)=\"openPage(pages[11])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O DETALHADA DO CICLO DE KREBS</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[12])\"\n                (click)=\"openPage(pages[12])\" class=\"buttonSIdeBAr\">\n                <h6>VIS\u00C3O DETALHADA DA FOSFORILA\u00C7\u00C3O<br> OXIDATIVA</h6>\n        </button>\n\n        <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[13])\"\n                (click)=\"openPage(pages[13])\" class=\"buttonSIdeBAr\">\n                <h6>TESTES</h6>\n        </button>\n          \n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* unused harmony export MainPage */
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'SumarioPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'SumarioPage';
//# sourceMappingURL=index.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map