import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CardDataService } from '../services/card-data.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit, OnChanges {
 
  @Input() public columnTitle!: string;
  @Input() public cardData: Card[] = [];
  public changedCard!: Card;
  public editMode: boolean = false;
  title!: string
  description!: string


  constructor(private cardDataService: CardDataService) {}

  ngOnInit(): void {
   
      this.cardData = this.cardDataService.cardList;
      console.log("card service in column", this.cardDataService.cardList)
      console.log("card list in column", this.cardData)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cardData = this.cardDataService.cardList;
    console.log("card service in column", this.cardDataService.cardList)
    console.log(changes);
    console.log("card lisT in column", this.cardData)
  }

  // getCardsFromServer() {
  //   this.cardDataService.getCardData().subscribe(
  //     (cards) => {
  //       if (!cards) {
  //         console.log("no cards collected")
  //         return
  //       } else {
  //         this.cardData = cards;
  //       }
  //     })

  // }

  //   ngOnInit(): void {
  //     this.getAllCardsFromAPI();

  //     this.api.cardsChanged.subscribe(
  //       (card) => {this.getAllCardsFromAPI();
  //     });
  //  }

  //  getAllCardsFromAPI() {
  //    this.api.getAllCards().subscribe((cards) => {
  //      if (!cards) {
  //        return;
  //      } else {
  //        this.cards = cards;
  //      }
  //    });
  //  }

  // ngOnChanges(): void {
  //   this.cardData.subscribe((data: any) => this.cardData = data)

  // }

  // cardUpdated( dataReceived: any ): void {
  //   let i = dataReceived.index;
  //   let lista = dataReceived.lista;
  //   console.log(i);
  //   this.cardData[i].lista = lista;
  //   console.log(this.cardData)

  // }

  // changeCardType(cardType: string): void {
  //   this.columnTitle = cardType;
  // }
}
