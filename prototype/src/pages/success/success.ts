import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    templateUrl : 'success.html'

})

export class SuccessPage{

    model: string ="";
    quantity: number;
    location: string="";

    constructor(public navParams: NavParams){
        this.model = this.navParams.get("model");
        this.quantity = this.navParams.get("quantity");
        this.location = this.navParams.get("location");

        console.log(this.model);
        console.log(this.quantity);
        console.log(this.location);
    }
}