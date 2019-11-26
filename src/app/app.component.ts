import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {Config, Nav, Platform, ToastController, LoadingController} from 'ionic-angular';
import {FirstRunPage} from '../pages';
import {Settings} from '../providers';

@Component({
  selector: 'side-main-menu',
  template: `<ion-menu [content]="content">
      <ion-header class="headerMAin">
        <ion-toolbar color="white">
        <ion-list class="headerMAin">
        <ion-item style="background: white !important;border-bottom: 0.55px solid #000000!important;">
          <ion-list class="logoImage" menuClose (click)="openPage(pages[4])">
            <div class="circle-pic" text-center #profilePic [style.background-image]="'url(../../assets/img/mestrado-logo.png)'"></div>
            <!--<img class="circle-pic" src="../../assets/img/mestrado.jpg"/>-->
          </ion-list>
          <h1 class="userName">Bio Respiração</h1>
          <h3 class="userDetails">Antonio Delmário Alves dos Santos</h3>
        </ion-item>
      </ion-list>
        </ion-toolbar>
      </ion-header>

      <ion-content class="sideMenuIoncContent">
        
        <ion-list>
          
        <button menuClose ion-item no-lines style="border-top: 0.55px solid #383838; !important;"
                [class.activeHIghlight]="checkActive(pages[0])" (click)="openPage(pages[0])" class="buttonSIdeBAr">
                <h6>SUMÁRIO</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[1])"
                (click)="openPage(pages[1])" class="buttonSIdeBAr">
                <h6>CONTEXTUALIZANDO A RESPIRAÇÃO <br> AERÓBIA</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[2])"
                (click)="openPage(pages[2])" class="buttonSIdeBAr">
                <h6>DEFINIÇÕES IMPORTANTES SOBRE <br> RESPIRAÇÃO</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[3])"
                (click)="openPage(pages[3])" class="buttonSIdeBAr">
                <h6>ETAPAS DA RESPIRAÇÃO AERÓBIA</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[4])"
                (click)="openPage(pages[4])" class="buttonSIdeBAr">
                <h6>VISÃO GERAL DA RESPIRAÇÃO <br> AERÓBIA </h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[5])"
                (click)="openPage(pages[5])" class="buttonSIdeBAr">
                <h6>VISÃO GERAL DA GLICÓLISE</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[6])"
                (click)="openPage(pages[6])" class="buttonSIdeBAr">
                <h6>VISÃO GERAL DO CICLO DE KREBES<br> OU DO ÁCIDO CÍTRICO</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[7])"
                (click)="openPage(pages[7])" class="buttonSIdeBAr">
                <h6>VISÃO GERAL DA CADEIA <br> TRANSPORTADORA DE ELÉTRONS</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[8])"
                (click)="openPage(pages[8])" class="buttonSIdeBAr">
                <h6>PRODUÇÃO DE ATP A PARTIR <br> DA OXIDAÇÃO COMPLETA DA GLICOSE</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[9])"
                (click)="openPage(pages[9])" class="buttonSIdeBAr">
                <h6>MITOCÔNDRIA</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[10])"
                (click)="openPage(pages[10])" class="buttonSIdeBAr">
                <h6>VISÃO DETALHADA DA GLICÓLISE</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[11])"
                (click)="openPage(pages[11])" class="buttonSIdeBAr">
                <h6>VISÃO DETALHADA DO CICLO DE KREBS</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[12])"
                (click)="openPage(pages[12])" class="buttonSIdeBAr">
                <h6>VISÃO DETALHADA DA FOSFORILAÇÃO<br> OXIDATIVA</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[13])"
                (click)="openPage(pages[13])" class="buttonSIdeBAr">
                <h6>MONTANDO A RESPIRAÇÃO AERÓBIA</h6>
        </button>

        <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[14])"
                (click)="openPage(pages[14])" class="buttonSIdeBAr">
                <h6>TESTES</h6>
        </button>
          
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav #content [root]="rootPage"></ion-nav>`
})


export class MyApp {

  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  activePage: any;

  pages: any[] = [
    {title: 'Sumario', component: 'SumarioPage'},
    {title: 'CONTEXTUALIZANDO A RESPIRAÇÃO AERÓBIA', component: 'ContextRespAerobicaPage'},
    {title: 'DEFINIÇÕES IMPORTANTES SOBRE RESPIRAÇÃO NA FORMA DE PERGUNTAS', component: 'DefinicoesImportantesPage'},
    {title: 'ETAPAS DA RESPIRAÇÃO AERÓBIA', component: 'EtapasRespAerobicaPage'},
    {title: 'VISÃO GERAL DA RESPIRAÇÃO AERÓBIA', component: 'GeralRespAerobicaPage'},
    {title: 'VISÃO GERAL DA GLICÓLISE', component: 'GeralGlicosePage'},
    {title: 'VISÃO GERAL DO CICLO DE KREBES OU DO ÁCIDO CÍTRICO', component: 'GeralCicloKrebesPage'},
    {title: 'VISÃO GERAL DA CADEIA TRANSPORTADORA DE ELÉTRONS', component: 'GeralCadeiaTranspPage'},
    {title: 'PRODUÇÃO DE ATP A PARTIR DA OXIDAÇÃO COMPLETA DA GLICOSE', component: 'ProducaoAtpPage'},
    {title: 'MITOCÔNDRIA', component: 'MitocondriaPage'},
    {title: 'VISÃO DETALHADA DA GLICÓLISE', component: 'DetalhadaGlicosePage'},
    {title: 'VISÃO DETALHADA DO CICLO DE KREBS', component: 'DetalhadaCicloKrebsPage'},
    {title: 'VISÃO DETALHADA DA FOSFORILAÇÃO<br> OXIDATIVA', component: 'DetalhadaFosforilacaoPage'},
    {title: 'MONTANDO A RESPIRAÇÃO AERÓBIA', component: 'MontandoRespAerobicaPage'},
    {title: 'TESTES', component: 'TestesPage'}
  ]


  constructor(private translate: TranslateService, platform: Platform, settings: Settings,
              private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1ABC9C');

    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }
    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    
    let loading = this.loadingCtrl.create({
      content: 'Aguarde, carregando...'
    });
    loading.present();
    
    setTimeout(() => {
      loading.dismiss();
      this.nav.setRoot(page.component);
      this.activePage = page;
      console.log(page.component);
      
    }, 1000);

  }
  checkActive(page) {
    return page == this.activePage;
  }
}
