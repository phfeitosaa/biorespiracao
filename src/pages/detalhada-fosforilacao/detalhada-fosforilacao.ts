import { Component } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController } from 'ionic-angular';
  import {Vibration} from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-detalhada-fosforilacao',
  templateUrl: 'detalhada-fosforilacao.html',
})
export class DetalhadaFosforilacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhadaFosforilacaoPage');
  }

}
