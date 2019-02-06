import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {

  public title;
  public contact: any = {
    email: ""
  }

  constructor() {
    this.title = 'Contacto';
  }

  ngOnInit() {
  }

  public sendContact() {
    localStorage.setItem('contact', JSON.stringify(this.contact));
  }

}
