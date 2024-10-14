import {Component,  OnInit, ViewChild} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from "./components/cronometro/cronometro.component";
import { FormComponent } from "./components/form/form.component";
import { DogService } from './services/api/dog/dog.service';
import { DogComponent } from "./components/dog/dog.component";
import { CountryService } from './services/api/country/country.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormComponent, DogComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {

  

}
