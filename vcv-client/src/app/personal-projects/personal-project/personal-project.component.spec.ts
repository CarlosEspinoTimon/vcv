import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectComponent } from './personal-project.component';

describe('PersonalProjectComponent', () => {
  let component: PersonalProjectComponent;
  let fixture: ComponentFixture<PersonalProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
