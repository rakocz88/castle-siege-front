import { LoginUser } from './login.user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  hero: LoginUser;
  title: string;
  info: string;
  buttonClass: string;
  allUsers;
  active: boolean;
  deleted: boolean;
  textSelected: string;
  selectinos = ['text1', 'text2', 'text3'];
  sometext: string;



  constructor(private router: Router) {
    this.hero = new LoginUser();
    this.title = 'some title';
    this.info = 'some info';
    this.allUsers = ['Jan', 'Walec'];
    this.buttonClass = 'input-error';
    this.deleted = true;
    this.textSelected = 'none';
  }

  ngOnInit() {
  }

  invoke(): void {
//    alert('user that tries to log in is ' + this.hero.login + ' with password ' + this.hero.password);
    if (this.hero.login === this.hero.password) {
      this.router.navigate(['cardlist']);
    } else {
      alert('Nieudane logowanie');
    }
  }

  changeButtonColor(): void {
    this.active = true;
     console.log('Active is now ' + this.active);
    (this.buttonClass === 'input-error') ? this.buttonClass = 'input-success' : this.buttonClass = 'input-error';
  }

  clickButton2(some) {
    console.log(some);
  }

}
