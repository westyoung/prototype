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

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
    ];
  }

  get(){
    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items");

    const query = itemRef.where("quantity",">","1")
    .get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id, " => ", this.initializeItems());
      });
    })
    .catch(function(error){
      console.log("Error getting documnet")
    })


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