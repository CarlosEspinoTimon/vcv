import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', () => {
  let component: PersonalProjectsComponent;
  let fixture: ComponentFixture<PersonalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
