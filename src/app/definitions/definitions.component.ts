import { Component, OnInit } from '@angular/core';
import { AdminDefinitionService } from '../services/admin-definition.service';
@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.css']
})
export class DefinitionsComponent implements OnInit {
  definitions: any;
  alphabets: string[];

  constructor(public adminDefinitionService: AdminDefinitionService) {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let alphaArray = str.split("");
    this.alphabets = alphaArray;
  }

  ngOnInit() {
    this.adminDefinitionService.getDefinitions().subscribe(definitions => {
      console.log(definitions)
      this.definitions = definitions

    });
    console.log(this.definitions)
  }

}
