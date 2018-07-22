import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = "Mi primera aplicacion angular 2";
   }

  ngOnInit() {
  }

}
