import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Output() evtFired = new EventEmitter<string>();

  @Input() cardType!: string;

  @Input() cardTitle!: string; // 
  @Input() cardDescription!: string;

  ngOnInit(): void {
  }

  addTask() {

  }

  taskBack() {
     this.cardType = this.cardType === 'Done!' ? 'Doing...' : 'To Do:' ;
    
  }

  deleteTask() {

  }

  taskForward() {

  }



  getBackgroundColor() {
    switch (this.cardType) {
      case "Create Task!": {
        return "white";
      }
      case "To Do:": {
        return "rgb(255, 240, 240)";

      }

      case "Doing...": {
        return "rgb(255, 255, 240)";
      }

      case "Done!": {
        return "rgb(240, 255, 255)";
      }

      default: {
        return "white";
      }
    }
  }
}
