import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-removestock',
  templateUrl: 'removestock.html',
})
export class RemovestockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  items: string[];
  name: string;
  labelColor: string = "primary";


  save(){
    this.navCtrl.push('SuccessPage', {
      name: this.name
    
    });
  }


  remove()
  {
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items")

    itemRef.doc(this.name).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }


  doBlur(){
    this.labelColor = "danger";
    
  }
  doFocus(){
    this.labelColor = "secondary";
  }
}

