import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // Propriedade que passa pro filho
 parentPropriedade: string = "Propriedade do Pai";
  //la no appchild cria-se a prop parentData! ( ! pra inicializar vazia) e será string.
  // parentData!: string;
  // coloca-se @input() antes pra RECEBER dado do pai.
  // @input() parentData!: string;

  childData: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvtFired(childData: any) {
    console.log(childData);
    this.childData = childData;
  }

}
