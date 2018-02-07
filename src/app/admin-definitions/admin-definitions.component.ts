import { Component, OnInit } from '@angular/core';
import { AdminDefinitionService } from '../services/admin-definition.service';
import {MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-admin-definitions',
  templateUrl: './admin-definitions.component.html',
  styleUrls: ['./admin-definitions.component.css']
})


export class AdminDefinitionsComponent implements OnInit {
  displayedColumns = [ 'french', 'japanese','definition', 'edit'];
  dataSource;
  position = 'above';
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public adminDefinitionService: AdminDefinitionService, public router: Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('assets/remove.svg'));
   }

  ngOnInit() {
   this.getDefinition();
  }
  getDefinition(){
    this.adminDefinitionService.getDefinitions().subscribe(definitions => {
      this.dataSource= new MatTableDataSource(definitions);
    });
  }
  onAdd(){
    this.router.navigate(['/admin-dashboard']);
  }
  onRemove(event):void{
    this.adminDefinitionService.deleteDefinition(event).subscribe(definitions => {
      this.getDefinition();
    });
  }

}
