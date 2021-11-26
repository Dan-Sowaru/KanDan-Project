import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {




 @Input() filhoPropriedade!: string;
 //No appchild cria-se a prop parentData! ( ! pra inicializar vazia) e será string.
// parentData!: string;
// coloca-se @input() antes pra RECEBER dado externo.
// @input() parentData!: string;

 childProp: string = "Propiedade do filho pra fora";


 //sintaxe pra emitir evento do filho pra fora;
@Output() clickEvtFired = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickEvtFired.emit(this.childProp);

  }

}
