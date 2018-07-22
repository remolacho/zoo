import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html'
})
export class KeepersComponent implements OnInit {

  public title;

  constructor() {
    this.title = 'Cuidadores';
  }

  ngOnInit() {
  }

}
