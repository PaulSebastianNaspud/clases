import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.scss'
})
export class DogComponent {
  @Input() dogList : {name: string, url : string, race :string} [] = []

}
