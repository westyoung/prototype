import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
//import {  NavController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'record.html'
})

export class RecordPage {

  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      '27MP58VQ',
      '27MP89GM',
    ];
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