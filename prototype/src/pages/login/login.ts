import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string="";
  password: string="";
  code: string="";
  labelColor: string = "primary";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn(){
    this.navCtrl.push('LoginpassPage', {
        username: this.username, //parameter를 successPage로 넘김.
        password: this.password,
        code: this.code
    });
}
doBlur(){
    this.labelColor = "danger";
}
doFocus(){
    this.labelColor = "secondary";
}

}
