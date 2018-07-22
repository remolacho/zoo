import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  public title;

  constructor() {
    this.title = 'Contactos';
  }

  ngOnInit() {
  }

}
