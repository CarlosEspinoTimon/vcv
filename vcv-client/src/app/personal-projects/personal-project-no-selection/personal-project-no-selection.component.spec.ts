import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectNoSelectionComponent } from './personal-project-no-selection.component';

describe('PersonalProjectNoSelectionComponent', () => {
  let component: PersonalProjectNoSelectionComponent;
  let fixture: ComponentFixture<PersonalProjectNoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectNoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectNoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
