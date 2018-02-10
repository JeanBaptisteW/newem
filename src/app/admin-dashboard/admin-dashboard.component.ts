import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, NgModel, Validators, FormGroup } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSidenav } from '@angular/material';
import { AdminDefinitionService } from '../services/admin-definition.service';
import { Router, NavigationExtras, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SessionData } from '../models/session-data';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  isUpdate: boolean = false;
  definition: any;
  definitionId: any;
  onrouteChange: boolean = false;
  form: FormGroup;
  isOpen: boolean;

  public editorOptions: Object = { key: '159.89.21.52 mC3B4E4E5G3B2F4I1B1A8C6A6==' };
  @ViewChild('drawer') drawer: MatSidenav;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, private route: ActivatedRoute, public router: Router, public adminDefinitionService: AdminDefinitionService) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.definitionId = params['id'];
    });
    if (this.definitionId != undefined) {
      this.adminDefinitionService.getDefinition(this.definitionId).subscribe(definitions => {
        this.isUpdate = true;
        this.definition = definitions;
        this.createForm();
      });
    }
  }

  ngDoCheck() {
    if (this.form.value.french != undefined && this.form.value.japanese != undefined || this.form.value.definition != undefined) {
      this.form.value['isPublished'] = false;
      if (!this.isUpdate) {
        SessionData.definitionForm = this.form.value;
      }
    }
  }
  events(event) {
    this.isOpen = event;
  }
  createForm() {
    this.form = this.fb.group({
      definition: [this.definition ? this.definition.definition : null, Validators.required],
      french: [this.definition ? this.definition.french : null, Validators.required],
      japanese: [this.definition ? this.definition.japanese : null, Validators.required],
    });
  }
  onSubmit() {
    this.form.value['isPublished'] = true;
    if (this.isUpdate) {
      this.form.value['_id'] = this.definitionId;
      this.adminDefinitionService.updateDefinition(this.form.value).subscribe(result => {
        let message = 'Updated Successfuly!';
        let action = '';
        this.snackBar.open(message, action, {
          duration: 2000,
        });
        Object.keys(this.definition).forEach(k => delete this.definition[k])
        this.createForm();
      },
        error => {
          console.log(error)
        });
    } else {
      this.adminDefinitionService.addDefinition(this.form.value).subscribe(result => {
        let message = 'Added Successfuly!';
        let action = '';
        this.snackBar.open(message, action, {
          duration: 2000,
        });
        this.createForm();
        Object.keys(SessionData.definitionForm).forEach(k => delete SessionData.definitionForm[k])
      },
        error => {
          console.log(error)
        });
    }
  }

}
