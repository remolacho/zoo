import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import * as _ from 'underscore';

@Component({
  selector: 'app-destroy-park',
  templateUrl: './destroy.component.html',
})
export class DestroyComponent implements OnInit {

  @Input('park') park: any;
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
