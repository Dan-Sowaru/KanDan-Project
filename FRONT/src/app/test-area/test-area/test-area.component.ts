import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styleUrls: ['./test-area.component.css']
})
export class TestAreaComponent implements OnInit {

  constructor() { }

  showPassword: boolean = true;
  log: Array<Date> = [];


  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    this.log.push(new Date());
  }

  }


