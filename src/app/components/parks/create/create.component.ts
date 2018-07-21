import { Component,
OnInit,
Input,
Output,
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

  @Input('showForm') showForm: boolean;
  @Output() sendPark = new EventEmitter();
  public park: any;
  public unitType: any;
  public typesParks: any;

  constructor() {
   }

  ngOnInit() {
    this.unitType = ["Kms", "Mts", "Cm", "otros"];
    this.typesParks = ["Zoologico", "Botanico", "Mecanico", "Deportivo"];
    this.initStructPark();
  }

  private initStructPark(){
    this.park = {
      id: 0,
      name: "",
      size: 0,
      unit: "Kms",
      schedule: {
        days: "",
        hours: "",
      },
      active: true,
      type: "Zoologico"
    }
  }

  public savePark(){
    this.sendPark.emit({park: this.park, success: true});
    this.initStructPark();
  }

}
