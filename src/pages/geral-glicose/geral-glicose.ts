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
  selector: 'page-geral-glicose',
  templateUrl: 'geral-glicose.html',
})
export class GeralGlicosePage {
  _imageViewerCtrl: ImageViewerController;

  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeralGlicosePage');
  }

  presentImage(id) {
    const imageViewer = this._imageViewerCtrl.create(id);
    imageViewer.present();
  }
}
