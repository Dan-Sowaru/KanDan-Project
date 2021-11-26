import { Injectable } from '@angular/core';
import { Card } from './card.model';


@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }

  cardList: Card[] = [
    new Card("Implantar HTTP", "fazer as requisições HTTP no código", "To Do:"),
    new Card("Mudar Coluna", "Conseguir mudar os cards de coluna usando um subscribe", "Doing..."),
    new Card("Mudar cor e botões", "mudar cor e botões dos cards conforme aperta os botões", "Done!")
  ]

  getCardData() {
    return this.cardList;
  }

  setCardData( index: number, lista: string) {
    this.cardList[index].lista = lista;


  }


}
