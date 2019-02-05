import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-list',
  templateUrl: './list.component.html'
})

export class ListAnimalComponent {

  public title;

  constructor() {
    this.title = 'Listado de Animales';
  }

}
