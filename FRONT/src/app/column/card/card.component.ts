import { createInput } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';
import { Card } from 'src/app/models/card.model';

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
  @Input() id!: number;
  @Input() card!: Card;
  editMode: boolean = false;

 

  // mudar pra emitir card completo

  

  ngOnInit(): void {
    console.log("card log", this.card.conteudo, this.card.lista)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.card = this.card;
    console.log("card changes", changes)
    console.log("cards on card component", this.card)
  }

  addTask() {

    //form

  }

  taskBack() {
     this.card.lista = this.card.lista === 'Done!' ? 'Doing...' : 'To Do:' ;
    this.cardDataService.setCardData(this.card.id, this.card.lista)
     console.log(this.card.id)
    
  }

  deleteTask() {
    this.card.lista = this.card.lista === 'Done!' ? 'Doing...' : 'To Do:' ;

  }

  taskForward() {
    this.card.lista = this.card.lista === 'To Do:' ? 'Doing...' : 'Done!' ;
    this.cardDataService.setCardData(this.card.id, this.card.lista)

  }



  getBackgroundColor() {
    switch (this.card.lista) {
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


