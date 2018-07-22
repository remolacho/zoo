import { Component,
OnInit,
Input,
Output,
EventEmitter } from '@angular/core';

import * as _ from 'underscore';


@Component({
  selector: 'app-list-parks',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('listParks') listParks: any;
  @Output() sendListParks = new EventEmitter();
  @Output() sendCurrenPark = new EventEmitter();
  public currentPark: any;

  constructor() { }

  ngOnInit() {
  }

  getListParks(data){
    this.listParks = data.listParks;
    this.sendListParks.emit({listParks: this.listParks});
  }

  showPark(park){
    this.sendCurrenPark.emit({currentPark: park});
  }
}
