import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() columnTitle!: string;

  public cardData: any = [];

  constructor(private cardDataService: CardDataService) { }

  ngOnInit(): void {
    this.cardData = this.cardDataService.getCardData();
  }

  // ngOnChanges(): void {
  //   this.cardData


  // }

  // changeCardType(cardType: string): void {
  //   this.columnTitle = cardType;
  // }

  

  




}
