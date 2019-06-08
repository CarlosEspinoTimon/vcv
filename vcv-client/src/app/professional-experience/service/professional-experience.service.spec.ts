import { TestBed } from '@angular/core/testing';

import { ProfessionalExperienceService } from './professional-experience.service';

describe('ProfessionalExperienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessionalExperienceService = TestBed.get(ProfessionalExperienceService);
    expect(service).toBeTruthy();
  });
});
