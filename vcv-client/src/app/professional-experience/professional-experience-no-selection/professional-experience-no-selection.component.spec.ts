import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceNoSelectionComponent } from './professional-experience-no-selection.component';

describe('ProfessionalExperienceNoSelectionComponent', () => {
  let component: ProfessionalExperienceNoSelectionComponent;
  let fixture: ComponentFixture<ProfessionalExperienceNoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceNoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalExperienceNoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
