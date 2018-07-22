import { Component,
OnInit,
Input,
Output,
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-park',
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
    this.unitType = ["Km", "Metros", "Cm", "otros"];
    this.typesParks = ["Zoologico", "Botanico", "Mecanico", "Deportivo"];
    this.initStructPark();
  }

  public savePark(){
    this.sendPark.emit({park: this.park, success: true});
    this.initStructPark();
  }

  private initStructPark(){
    this.park = {
      id: 0,
      name: "",
      size: 0,
      unit: "Km",
      schedule: {
        days: "",
        hours: "",
      },
      active: true,
      type: "Zoologico"
    }
  }


}
