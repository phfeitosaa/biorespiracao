import { Component } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController
 } from 'ionic-angular';
 import {Vibration} from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-definicoes-importantes',
  templateUrl: 'definicoes-importantes.html',
})
export class DefinicoesImportantesPage {

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinicoesImportantesPage');
  }

}
