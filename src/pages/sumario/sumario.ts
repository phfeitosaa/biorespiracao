import {Component} from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from 'ionic-angular';
import {Vibration} from '@ionic-native/vibration';

import {Items} from '../../providers';

@IonicPage()
@Component({
  selector: 'sumario',
  templateUrl: 'sumario.html'
})
export class SumarioPage {

  currentItems: any[];
  public press: number = 0;


  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
              public items: Items, public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {

    this.currentItems = this.items.query();


  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = this.items.query();
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  abrirCap1() {
    this.navCtrl.push('ContextRespAerobicaPage');
  }

  abrirCap2() {
    this.navCtrl.push('DefinicoesImportantesPage');
  }
  abrirCap3() {
    this.navCtrl.push('EtapasRespAerobicaPage');
  }

  abrirCap4() {
    this.navCtrl.push('GeralRespAerobicaPage');
  }

  abrirCap5() {
    this.navCtrl.push('GeralGlicosePage');
  }

  abrirCap6() {
    this.navCtrl.push('GeralCicloKrebesPage');
  }

  abrirCap7() {
    this.navCtrl.push('GeralCadeiaTranspPage');
  }

  abrirCap8() {
    this.navCtrl.push('ProducaoAtpPage');
  }

  abrirCap9() {
    this.navCtrl.push('MitocondriaPage');
  }

  abrirCap10() {
    this.navCtrl.push('DetalhadaGlicosePage');
  }

  abrirCap11() {
    this.navCtrl.push('DetalhadaCicloKrebsPage');
  }

  abrirCap12() {
    this.navCtrl.push('DetalhadaFosforilacaoPage');
  }

  abrirCap13() {
    this.navCtrl.push('MontandoRespAerobicaPage');
  }

  abrirCap14() {
    this.navCtrl.push('TestesPage');
  }
}
