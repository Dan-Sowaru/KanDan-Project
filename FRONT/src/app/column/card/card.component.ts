import { createInput } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDataService } from 'src/app/card-data.service';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardDataService: CardDataService) { }

  @Output() evtFired = new EventEmitter<Card>();

  @Input() lista!: string;

  @Input() titulo!: string; // 
  @Input() conteudo!: string;
  @Input() index!: number;

  // @Input() tempCard!: Card;

  dataToEmit: any = {
    index: this.index,
    titulo: this.titulo
  }

  

  ngOnInit(): void {
    
  }

  addTask() {

  }

  taskBack() {
     this.lista = this.lista === 'Done!' ? 'Doing...' : 'To Do:' ;
    this.cardDataService.setCardData(this.index, this.lista)
     console.log(this.index)
    
  }

  deleteTask() {
    this.lista = this.lista === 'Done!' ? 'Doing...' : 'To Do:' ;

  }

  taskForward() {
    this.lista = this.lista === 'To Do:' ? 'Doing...' : 'Done!' ;
    this.cardDataService.setCardData(this.index, this.lista)

  }



  getBackgroundColor() {
    switch (this.lista) {
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


