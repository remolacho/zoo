import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public title;
  public items;
  public namePark: string;

  constructor() {
      this.title = 'This is the store component parent';
      this.items = [];
      this.namePark = '';
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
