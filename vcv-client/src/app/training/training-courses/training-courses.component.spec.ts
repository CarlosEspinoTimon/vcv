import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCoursesComponent } from './training-courses.component';

describe('TrainingCoursesComponent', () => {
  let component: TrainingCoursesComponent;
  let fixture: ComponentFixture<TrainingCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
