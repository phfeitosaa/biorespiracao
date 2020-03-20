import { Component } from '@angular/core';
import { IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController } from 'ionic-angular';
  import {Vibration} from '@ionic-native/vibration';
  import { ImageViewerController } from 'ionic-img-viewer';

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
  _imageViewerCtrl: ImageViewerController;

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContextRespAerobicaPage');
  }

  presentImage(id) {
    const imageViewer = this._imageViewerCtrl.create(id);
    imageViewer.present();
  }
}
