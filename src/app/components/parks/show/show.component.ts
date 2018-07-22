import { Component,
  OnInit,
  Input } from '@angular/core';

@Component({
  selector: 'app-show-park',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {

  @Input("park") park: any;

  constructor() { }

  ngOnInit() {
  }

}
