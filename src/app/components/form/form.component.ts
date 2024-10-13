import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  code = -1
  description = ""
  price = -1

  @Output() sendDataEvent = new EventEmitter()

  addPRoduct(){
    this.sendDataEvent.emit({code: this.code, description: this.description, price: this.price})
    this.clearTxt()
  }

  clearTxt(){
    this.code= -1
    this.description = ""
    this.price = -1
  }
}
