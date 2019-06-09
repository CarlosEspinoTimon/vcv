import { TestBed } from '@angular/core/testing';

import { PersonalProjectsService } from './personal-projects.service';

describe('PersonalProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalProjectsService = TestBed.get(PersonalProjectsService);
    expect(service).toBeTruthy();
  });
});
