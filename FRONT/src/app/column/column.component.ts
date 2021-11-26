import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CardDataService } from '../card-data.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() columnTitle!: string;

  public cardData: any = [];
  public changedCard!: Card;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit(): void {
    this.cardData = this.cardDataService.getCardData();
    console.log(this.cardData)
    }
  

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
