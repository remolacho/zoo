import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-create',
  templateUrl: './create.component.html'
})

export class CreateAnimalComponent {

  public title;

  constructor() {
    this.title = 'Crear Animales';
  }

}
