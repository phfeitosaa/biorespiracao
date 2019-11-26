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
  selector: 'page-etapas-resp-aerobica',
  templateUrl: 'etapas-resp-aerobica.html',
})
export class EtapasRespAerobicaPage {

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtapasRespAerobicaPage');
  }

}
