import {Component, input, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { FormComponent } from "./components/form/form.component";
import { DogService } from './services/api/dog.service';
import { DogComponent } from "./components/dog/dog.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormComponent, DogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  implements OnInit{

  title = 'Class_Examples';
  name = 'Mi nombre es Paúl';

  listProducts = [
    {code: 1, description: "Licuadora" , price : 15.5 },
    {code: 2, description: "Tv" , price : 455.00 },
    {code: 3, description: "Cocina" , price : 850.99 },
  ];

  
  /* 
    Form
  */

  @ViewChild("form") form! : FormComponent

  addItem(valueList : {code:number, description : string, price : number }) {
    if (!this.listProducts.some(a => a.code == valueList.code)) {
      this.listProducts.push({
        code: valueList.code,
        description: valueList.description,
        price: valueList.price,
      });
    } else {
      this.listProducts.forEach(value => {
        if (value.code === valueList.code) {
          value.description = valueList.description;
          value.price = valueList.price;
          return;
        }
      });
    }
  }

  deleteItem(code :number){
    this.listProducts =  this.listProducts.filter(value => value.code != code);

  }

  selectItem(value: { code:number, description :string, price:number }){
    this.form.code = value.code
    this.form.description = value.description
    this.form.price = value.price
  }

  /* PADRE E HIJOS  DADOS */

  mensage : string = "";

  @ViewChild("dado1") dado1! : DadoComponent;
  @ViewChild("dado2") dado2! : DadoComponent;
  @ViewChild("dado3") dado3! : DadoComponent;

  lanzar(){
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();

    if(this.dado1.valor == this.dado2.valor || this.dado1.valor == this.dado3.valor || this.dado2.valor == this.dado3.valor){
      this.mensage = "USTED A GANADO";
    } else {
      this.mensage = "USTED A PERDIDO";
    }

  }

  /* Implementar timer de minutos */
    
  minute = 0
  
  addMinute(isAddMinute : boolean){
    if(isAddMinute){
      this.minute++
    }
  }

  /* SERVICES
     PERROS SERVICES
  */
  
  dogsList = []

  constructor(private dogService : DogService) {}

  ngOnInit(): void {
    this.dogService.addDog("Renzo", "Beagle")
    this.dogService.addDog("Rambo", "Koker")
    this.dogService.addDog("Rambo", "Koker")
    this.dogService.addDog("Rambo", "Koker")
    this.dogService.addDog("Rambo", "Koker")
    this.dogsList = this.dogService.listDogs
  }
}
