import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, DoCheck {

  public title: string;
  public currentContact: any;

  constructor() {
    this.title = 'NG ZOO';
   }

  ngOnInit() {
  }

  ngDoCheck() {
    this.currentContact = JSON.parse(localStorage.getItem('contact'));
  }

  logOut() {
    localStorage.removeItem('contact');
    localStorage.clear();
    this.currentContact = null;
  }

}
