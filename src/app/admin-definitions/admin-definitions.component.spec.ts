import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDefinitionsComponent } from './admin-definitions.component';

describe('AdminDefinitionsComponent', () => {
  let component: AdminDefinitionsComponent;
  let fixture: ComponentFixture<AdminDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
