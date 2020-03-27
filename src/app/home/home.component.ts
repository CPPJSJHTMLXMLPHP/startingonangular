import { Component, OnInit } from '@angular/core';

Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
});

let buy = 0;

export class HomeComponent implements OnInit {

buy() {
let test: string;
test = 'se guarda el valor:' ;
buy = buy + 1;
document.write(test + buy);
open.call(this.login);
}

login() {
let test2: string;
test2 = 'su producto fue agregado' ;

}

  constructor() { }

  ngOnInit() {
  }

}
