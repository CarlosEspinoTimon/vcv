import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoSelectionComponent } from './article-no-selection.component';

describe('ArticleNoSelectionComponent', () => {
  let component: ArticleNoSelectionComponent;
  let fixture: ComponentFixture<ArticleNoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
