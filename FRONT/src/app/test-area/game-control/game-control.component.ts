import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  constructor() { }

  

  //minha solução
  odds: any = [];
  evens: any = [];
  num: number = 0;

  //larissa
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;
  
  ngOnInit(): void {
  }

 

  // solução larissa
  onStartGame() {
    this.interval = setInterval(
      () => {
        this.intervalFired.emit(this.lastNumber+1);
        this.lastNumber++;
      }, 1000
    )
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
