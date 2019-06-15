import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingUniversityComponent } from './training-university.component';

describe('TrainingUniversityComponent', () => {
  let component: TrainingUniversityComponent;
  let fixture: ComponentFixture<TrainingUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
