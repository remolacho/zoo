import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-edit',
  templateUrl: './edit.component.html'
})

export class EditAnimalComponent {

  public title;

  constructor() {
    this.title = 'Editar Animales';
  }

}
