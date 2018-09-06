import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcalentryComponent } from './addcalentry.component';

describe('AddcalentryComponent', () => {
  let component: AddcalentryComponent;
  let fixture: ComponentFixture<AddcalentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcalentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcalentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
