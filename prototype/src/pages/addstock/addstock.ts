import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-addstock',
  templateUrl: 'addstock.html',
})
export class AddstockPage {

  model: string="";
  quantity: number;
  labelColor: string = "primary";
  productCode: string;
  classification : string;
  location: string;
  
  
  constructor(public navCtrl: NavController){

  }

  save(){
      this.navCtrl.push('SuccessPage', {
          model: this.model,
          quantity: this.quantity,
          location: this.location
      
      });
  }
  doBlur(){
      this.labelColor = "danger";
      
  }
  doFocus(){
      this.labelColor = "secondary";
  }



  savestock(){

      let firestore = firebase.firestore();
      const itemRef = firestore.collection("items").doc(this.model)
      itemRef.set({
        // productCode : this.productCode,
        model: this.model,
        quantity : this.quantity,
        location : this.location
      }).then(()=>{
        alert("Data succesfully written!"),
        this.save()
      }).catch((error)=>{
        alert("Error"+error)
      })
  
    }
}
