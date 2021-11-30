import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService implements OnChanges {
  private baseUrl = 'http://localhost:5000/';

  private authorization!: string;
  cardsChanged = new Subject();
  isLogged = new Subject();

  // @Input() cardList: Card[] = [];
  
  // --------------- ARRAY DE TESTE-----------------------//
  cardList: Card[] = [
    new Card( "Implantar HTTP", "fazer as requisições HTTP no código", "To Do:", '1'),
    new Card("Mudar Coluna", "Conseguir mudar os cards de coluna usando um subscribe", "Doing...", '2'),
    new Card( "Mudar cor e botões", "mudar cor e botões dos cards conforme aperta os botões", "Done!", '3')
  ]

  constructor(private http: HttpClient) {
    console.log(this.cardList)
  }

  ngOnChanges() {

  }


  setCardData(index: string, lista: string) {
    // this.cardList[index].lista = lista;
  }

  updateCardData(index: number, titulo: string, content: string) {}

  deleteCardData(index: number) {
    // logica
    // this.getCardData();
  }



  getAuthorizationToken(login: string, senha: string) {
    const url = this.baseUrl + 'login/';
    const msgBody = { login: login, senha: senha };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    const response = this.http.post<string>(url, msgBody, options);
    console.log('get authorization token', response);
    return response;
  }

  setAuth(token: string) {
    this.authorization = 'Bearer ' + token;
    localStorage.setItem('auth', this.authorization);
    // console.log(this.authorization)
    // this.isLogged.next(true);
  }

  clearAuth() {
    this.authorization = '';
    localStorage.removeItem('auth');
    this.isLogged.next(true);
  }

  getCardData() {
    const url = this.baseUrl + 'cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const response = this.http.get<Card[]>(url, options);
    console.log('get card data', response);
    return response;
  }

  addCard(newCard: Card) {
    const url = this.baseUrl + 'cards/';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.authorization,
    };
    const options = { headers: headers };
    const response = this.http.post<Card[]>(url, newCard, options);
    console.log('get card data', response);
    return response;
  }
}





  // (POST)    http://0.0.0.0:5000/login/
  // (GET)     http://0.0.0.0:5000/cards/
  // (POST)    http://0.0.0.0:5000/cards/
  // (PUT)     http://0.0.0.0:5000/cards/{id}
  // (DELETE)  http://0.0.0.0:5000/cards/{id}

  // getCardData() {
  //   // return this.cardList;
  //   return this.http.get(`${this.baseUrl}/cards`, this.authorization)

  // }

