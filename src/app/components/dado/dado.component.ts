import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})
export class DadoComponent {
  valor : number = 15;
  url : string = "../../../assets/img/dados/dado1.png";

  @Input() color : string = "";

  lanzar():void {
    this.valor = Math.trunc(Math.random() * 6 ) + 1;
    const path : string = "../../assets/img/dados/dado";
    this.url = path + this.valor.toString() + ".png";
  }

}
