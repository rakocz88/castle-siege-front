import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  title: string;
  info: string;
  allUsers;

  constructor() {
    this.title = 'some title';
    this.info = 'some info';
    this.allUsers = ['Jan', 'Walec'];
  }

  ngOnInit() {
  }

}
