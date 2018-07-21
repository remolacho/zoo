import { Component,
  OnInit,
  Input } from '@angular/core';

@Component({
  selector: 'app-list-parks',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('listParks') listParks: any;

  constructor() { }

  ngOnInit() {
  }

}
