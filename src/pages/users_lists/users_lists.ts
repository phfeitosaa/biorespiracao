import {Component} from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from 'ionic-angular';
import {Vibration} from '@ionic-native/vibration';


import {Item} from '../../models/item';
import {Items} from '../../providers';
import {ItemSliding} from "ionic-angular/umd";



@IonicPage()
@Component({
  selector: 'users_lists',
  templateUrl: 'users_lists.html'
})
export class UsersPage {

  currentItems: any[];
  public press: number = 0;


  constructor(public vibration: Vibration, public navCtrl: NavController, public navParams: NavParams,
              public items: Items, public modalCtrl: ModalController,
              public toastCtrl: ToastController, private alertCtrl: AlertController,
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
    this.navCtrl.push('Followers');
  }

  abrirCap2() {
    this.navCtrl.push('Followers');
  }
  abrirCap3() {
    this.navCtrl.push('Followers');
  }

  abrirCap4() {
    this.navCtrl.push('Followers');
  }

  abrirCap5() {
    this.navCtrl.push('Followers');
  }

  abrirCap6() {
    this.navCtrl.push('Followers');
  }

  abrirCap7() {
    this.navCtrl.push('Followers');
  }

  abrirCap8() {
    this.navCtrl.push('Followers');
  }

  abrirCap9() {
    this.navCtrl.push('Followers');
  }

  abrirCap10() {
    this.navCtrl.push('Followers');
  }

  abrirCap11() {
    this.navCtrl.push('Followers');
  }

  abrirCap12() {
    this.navCtrl.push('Followers');
  }

  abrirCap13() {
    this.navCtrl.push('Followers');
  }

  abrirCap14() {
    this.navCtrl.push('Followers');
  }
}
