import { Component } from '@angular/core';
import { 
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  LoadingController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-producao-atp',
  templateUrl: 'producao-atp.html',
})
export class ProducaoAtpPage {
  _imageViewerCtrl: ImageViewerController;

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProducaoAtpPage');
  }

  presentImage(id) {
    const imageViewer = this._imageViewerCtrl.create(id);
    imageViewer.present();
  }
}
