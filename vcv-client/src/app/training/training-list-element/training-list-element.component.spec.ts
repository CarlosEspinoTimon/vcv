import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListElementComponent } from './training-list-element.component';

describe('TrainingListElementComponent', () => {
  let component: TrainingListElementComponent;
  let fixture: ComponentFixture<TrainingListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
