import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }

  getCardData() {
    return [
      {cardType: "Doing...", cardTitle: "fazer comida", cardDescription: "preparar comidinha gostosinha hoje."},
      {cardType: "To Do:", cardTitle: "amanhã dormir", cardDescription: "tentar dormir amanhã"},
      {cardType: "Done!", cardTitle: "aula Let's Code", cardDescription: "aulinha Let's Code gostosinha de noite"},
      {cardType: "Doing...", cardTitle: "aula de git com Amanda", cardDescription: "Me explicando como fazer push no git"}
    ]
  }


}
