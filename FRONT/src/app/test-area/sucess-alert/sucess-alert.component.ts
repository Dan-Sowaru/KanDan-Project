import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  template: `<button class="btn btn-warning">Warning</button>`,
  styles: [`
  p {
    margin : 20px;
  }`]
  }
 
)
export class SucessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
