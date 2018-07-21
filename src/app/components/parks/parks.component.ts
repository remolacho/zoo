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
  public listPark: any = [];

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
      data.park.id = this.listPark.length + 1; //cargamos el id unico
      this.listPark.push(data.park);
      this.newPark();
    }
  }

}
