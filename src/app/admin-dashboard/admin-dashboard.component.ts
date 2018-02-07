import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, NgModel, Validators, FormGroup } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSidenav } from '@angular/material';
import { AdminDefinitionService } from '../services/admin-definition.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  form: FormGroup;
  isOpen: boolean;

  public editorOptions: Object = { key: '159.89.21.52 mC3B4E4E5G3B2F4I1B1A8C6A6==' };
  @ViewChild('drawer') drawer: MatSidenav;

  constructor(private fb: FormBuilder, public adminDefinitionService: AdminDefinitionService) {
    this.createForm();
  }

  ngOnInit() {

  }

  ngDoCheck(){
    console.log(this.form.value)
  }
  events(event) {
    this.isOpen = event;
  }
  createForm() {
    this.form = this.fb.group({
      definition: [null, Validators.required],
      french: [null, Validators.required],
      japanese: [null, Validators.required],
    });
  }
  onSubmit() {
    console.log(this.form.value)

    this.adminDefinitionService.addDefinition(this.form.value).subscribe(result => {
      // Handle result
      console.log(result)
    },
      error => {
        console.log(error)

      });
  }

}
