import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  @Input('namePark') name: string;
  public meters: number;
  public vegetation: string;
  public open: boolean;

  constructor() {
    this.meters = 1500;
    this.vegetation = 'High';
    this.open = true;
  }

  ngOnInit() {
  }

}
