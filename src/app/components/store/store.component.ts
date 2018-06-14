import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public title;
  public items;

  constructor() {
      this.title = 'This is the store';
      this.items = [];
   }

  ngOnInit() {
    this.items = [
      {id: 1, name: 'Shirts'},
      {id: 2, name: 'Pants'},
      {id: 3, name: 'Caps'},
      {id: 4, name: 'Flags'},
    ];
  }

}
