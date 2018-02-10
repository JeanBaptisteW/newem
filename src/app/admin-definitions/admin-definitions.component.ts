import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminDefinitionService } from '../services/admin-definition.service';
import { MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-admin-definitions',
  templateUrl: './admin-definitions.component.html',
  styleUrls: ['./admin-definitions.component.css']
})


export class AdminDefinitionsComponent implements OnInit {
  @ViewChild('input') _inputElement: ElementRef;
  displayedColumns = ['french', 'japanese', 'definition', 'edit', 'published'];
  dataSource;
  position = 'above';
  color = 'accent';
  checked = true;
  unchecked = false;
  disabled = false;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(public adminDefinitionService: AdminDefinitionService, public snackBar: MatSnackBar, elementRef: ElementRef, public router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('assets/remove.svg'));
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/edit.svg'));
  }

  ngOnInit() {
    this.getDefinition();
  }
  getDefinition() {
    this.adminDefinitionService.getDefinitions().subscribe(definitions => {
      this.dataSource = new MatTableDataSource(definitions);
    });
  }
  testChange(event) {
    let def = event.definition;
    if (event.event.checked) {
      if (def.definition != null && def.french != null && def.japanese != null) {
        def['isPublished'] = true;
        this.adminDefinitionService.updateDefinition(def).subscribe(result => {
          let message = 'Definition published successfully!';
          let action = '';
          this.snackBar.open(message, action, {
            duration: 2000,
          });
        },
          error => {
            console.log(error)
          });
      } else {
        let message = 'Definition is not complete!';
        let action = '';
        this.snackBar.open(message, action, {
          duration: 2000,
        });
        this.getDefinition()
      }
    } else {
      def['isPublished'] = false;
      this.adminDefinitionService.updateDefinition(def).subscribe(result => {
        let message = 'Definition unpublished successfully!';
        let action = '';
        this.snackBar.open(message, action, {
          duration: 2000,
        });
      },
        error => {
          console.log(error)
        });
    }
  }
  onAdd() {
    this.router.navigate(['/admin-dashboard']);
  }
  onUpdate(id){
    this.router.navigate(['/admin-dashboard/'+id]);
  }
  onRemove(event): void {
    this.adminDefinitionService.deleteDefinition(event).subscribe(definitions => {
      let message = 'Removed!';
      let action = '';
      this.snackBar.open(message, action, {
        duration: 2000,
      });
      this.getDefinition();
    });
  }

}
