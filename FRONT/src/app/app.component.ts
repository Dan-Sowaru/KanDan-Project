import { Component } from '@angular/core';
import { Card } from './models/card.model';
import { CardDataService } from './services/card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanban-project';
  
  appComponentCardList: Card[] = []

  constructor(private cardDataService: CardDataService) {}

  ngOnInit(): void {
    
  //   let user = 'letscode';
  //   let senha = 'lets@123';
    
  //   this.cardDataService
  //   .getAuthorizationToken(user, senha)
  //   .subscribe((token) => {
  //     this.cardDataService.setAuth(token);
  //     this.getCardsFromServer()
  //   });

  //   this.cardDataService.cardsChanged.subscribe((data) =>
  //     this.getCardsFromServer()
  //   );
  // }

  // getCardsFromServer() {
  //   this.cardDataService.getCardData().subscribe((data) => {
  //     this.cardDataService.cardList = data;
  //     console.log(this.cardDataService.cardList)
  //   });
  }
}
