import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceComponent } from './professional-experience.component';

describe('ProfessionalExperienceComponent', () => {
  let component: ProfessionalExperienceComponent;
  let fixture: ComponentFixture<ProfessionalExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
