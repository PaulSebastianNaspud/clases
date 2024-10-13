import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss'
})

export class CronometroComponent implements OnInit{
  
  seconds :number = 0;

  @Output() getMinuteEvent = new EventEmitter<boolean>()
  
  ngOnInit(): void {
    setInterval(()=> {
      this.seconds ++
      if (this.seconds % 60 == 0){
        this.getMinuteEvent.emit(true)
      }
    }, 10)
    
  }



}
