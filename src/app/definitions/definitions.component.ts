import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.css']
})
export class DefinitionsComponent implements OnInit {
  alphabets: string[];

  constructor() {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let alphaArray = str.split("");
    this.alphabets = alphaArray;
  }

  ngOnInit() {
  }

}
