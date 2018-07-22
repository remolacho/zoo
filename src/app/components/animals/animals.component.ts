import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {

  public title;

  constructor() {
    this.title = 'Animales';
  }

  ngOnInit() {
  }


}
