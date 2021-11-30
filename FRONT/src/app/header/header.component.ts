import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cardDataService: CardDataService) { }

  ngOnInit(): void {
  }

  updateCardList() {
   
      this.cardDataService.getCardData().subscribe((data) => {
        this.cardDataService.cardList = data;
        console.log(this.cardDataService.cardList)
      });
    
  }

}
