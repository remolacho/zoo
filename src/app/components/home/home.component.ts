import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public title;

  constructor() {
    this.title = 'Bienvenido a NGZOO';
  }

  ngOnInit() {
  }

}
