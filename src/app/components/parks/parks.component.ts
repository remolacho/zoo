import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  public name: string;
  public meters: number;
  public vegetation: string;
  public open: boolean;

  constructor() {
    this.name = 'Zoo';
    this.meters = 1500;
    this.vegetation = 'High';
    this.open = true;
  }

  ngOnInit() {
  }

}
