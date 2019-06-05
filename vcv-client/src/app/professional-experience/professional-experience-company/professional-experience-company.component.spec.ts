import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceCompanyComponent } from './professional-experience-company.component';

describe('ProfessionalExperienceCompanyComponent', () => {
  let component: ProfessionalExperienceCompanyComponent;
  let fixture: ComponentFixture<ProfessionalExperienceCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalExperienceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
