import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private barcodeScanner : BarcodeScanner) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  foo(){
  this.barcodeScanner.scan().then((barcodeData) => {
    // Success! Barcode data is here
   }, (err) => {
       // An error occurred
   });
  }
}
