import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  @Input('accessToPark') accessToPark: boolean;

  public park: any = {
    meters: 0,
    vegetation: '',
    open: false,
  };

  @Output() sendData = new EventEmitter();

  constructor() {
    this.park.meters = 1500;
    this.park.vegetation = 'High';
    this.park.open = true;
  }

  ngOnInit() {
  }

  sendEventPark(){
    this.sendData.emit(this.park);
  }

}
