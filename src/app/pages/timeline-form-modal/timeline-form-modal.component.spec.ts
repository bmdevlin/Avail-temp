import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFormModalComponent } from './timeline-form-modal.component';

describe('TimelineFormModalComponent', () => {
  let component: TimelineFormModalComponent;
  let fixture: ComponentFixture<TimelineFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
