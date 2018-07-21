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

  constructor() { }

  ngOnInit() {
  }

  deletePark(id){
    this.listParks = _.reject(this.listParks, {id: id});
    this.sendListParks.emit({listParks: this.listParks});
  }

}
