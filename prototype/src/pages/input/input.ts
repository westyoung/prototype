import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import firebase from 'firebase'


@Component({
    templateUrl:'input.html'
})

export class InputPage{
    username: string="";
    password: string="";
    code: string="";
    labelColor: string = "primary";

    constructor(public navCtrl: NavController){

    }

    signIn(){
        this.navCtrl.push('SuccessPage', {
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