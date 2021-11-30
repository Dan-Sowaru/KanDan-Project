import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  blockedLogin: boolean = false;

  constructor(
    private router: Router,
    private cardDataService: CardDataService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    this.cardDataService
      .getAuthorizationToken(
        this.loginForm.value.login,
        this.loginForm.value.senha
      )
      .subscribe((token: string) => {
        if (token) {
          this.cardDataService.setAuth(token);
          this.router.navigateByUrl('/kanban');
          this.blockedLogin = false;
          this.getCardsFromServer() 
        } else {
          this.blockedLogin = true;
          this.loginForm.reset();
          this.cardDataService.clearAuth();
        }
        
      });
  }

  // this.cardDataService
  //   .getAuthorizationToken(user, senha)
  //   .subscribe((token) => {
  //     this.cardDataService.setAuth(token);
  //     this.getCardsFromServer()
  //   });
  
  // }
  
  getCardsFromServer() {
    this.cardDataService.getCardData().subscribe((data) => {
      this.cardDataService.cardList = data;
      console.log(this.cardDataService.cardList)
  })

}
  logout(): void {
    this.router.navigateByUrl('/login');
    this.cardDataService.clearAuth();
  }
}
