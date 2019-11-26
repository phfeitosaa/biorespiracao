import { Component } from '@angular/core';
import { IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController } from 'ionic-angular';
  import {Vibration} from '@ionic-native/vibration';

/**
 * Generated class for the ContextRespAerobicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-context-resp-aerobica',
  templateUrl: 'context-resp-aerobica.html',
})
export class ContextRespAerobicaPage {

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContextRespAerobicaPage');
  }

}
