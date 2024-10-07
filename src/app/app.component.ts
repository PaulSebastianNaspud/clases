import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from "./components/dado/dado.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Class_Examples';
  name = 'Mi nombre es Paúl';
  
  code = -1;
  description = "";
  price = -1;

  listProducts = [
    {code: 1, description: "Licuadora" , price : 15.5 },
    {code: 2, description: "Tv" , price : 455.00 },
    {code: 3, description: "Cocina" , price : 850.99 },
  ];

  selectItem(value: { code:number, description :string, price:number }){
    this.code = value.code;
    this.description = value.description;
    this.price = value.price;
  }

  addItem() {
    if (!this.listProducts.some(a => a.code == this.code)) {
      this.listProducts.push({
        code: this.code,
        description: this.description,
        price: this.price,
      });
    } else {
      this.listProducts.forEach(value => {
        if (value.code === this.code) {
          value.description = this.description;
          value.price = this.price;
          return;
        }
      });
    }
    this.resetValues();
  }

  deleteItem(code :number){
    this.listProducts =  this.listProducts.filter(value => value.code != code);

  }
  
  resetValues(){
    this.code = -1;
    this.price = -1;
    this.description = "";
  }


  /* PADRE E HIJOS */

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
}
