import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingNoSelectionComponent } from './training-no-selection.component';

describe('TrainingNoSelectionComponent', () => {
  let component: TrainingNoSelectionComponent;
  let fixture: ComponentFixture<TrainingNoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingNoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingNoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
