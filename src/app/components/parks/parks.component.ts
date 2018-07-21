import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  //@Input('accessToPark') accessToPark: boolean;

  public createPark: boolean = false;
  public btnText: string = "Nuevo parque"
  public listParks: any = [];

  constructor() {
  }

  ngOnInit() {
  }

  newPark(){
    this.createPark = this.createPark ? false : true;
    this.btnText = this.createPark ? "Ocultar formulario" : "Nuevo parque";
  }

  getDataPark(data){
    if(data.success){
      data.park.id = this.listParks.length + 1; //cargamos el id unico
      this.listParks.push(data.park);
      this.newPark();
    }
  }

  getListParks(data){
    this.listParks = data.listParks
  }

}
