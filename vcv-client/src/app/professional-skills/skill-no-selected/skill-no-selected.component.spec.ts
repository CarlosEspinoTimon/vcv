import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillNoSelectedComponent } from './skill-no-selected.component';

describe('SkillNoSelectedComponent', () => {
  let component: SkillNoSelectedComponent;
  let fixture: ComponentFixture<SkillNoSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillNoSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillNoSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
