import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  searchQuery: string = '';
  items: string[];
  tt: string = "test";
  numb: number = 0;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {

    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items");


    itemRef.where("quantity", ">", "0")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           console.log(doc.data().model)
            })
    });

  }

  
  test(){
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items");


    itemRef.where("quantity", ">", "0")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.data().model)
            })
    });
  


  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}