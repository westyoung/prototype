import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(){
    this.navCtrl.push('SearchPage');
  }

  add(){
    this.navCtrl.push('AddstockPage');
  }

  remove()
  {
    this.navCtrl.push('RemovestockPage');
  }

  record(){
    this.navCtrl.push('RecordPage');
  }
}

