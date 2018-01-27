import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-loginpass',
  templateUrl: 'loginpass.html',
})
export class LoginpassPage {

  username: string ="";
  password: string ="";
  code: string="";

  constructor(public navParams: NavParams){
      this.username = this.navParams.get("username");
      this.password = this.navParams.get("password")
      this.code = this.navParams.get("code");

      console.log(this.username);
      console.log(this.password);
      console.log(this.code);
  }
}
