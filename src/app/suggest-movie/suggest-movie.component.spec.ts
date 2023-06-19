import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestMovieComponent } from './suggest-movie.component';

describe('SuggestMovieComponent', () => {
  let component: SuggestMovieComponent;
  let fixture: ComponentFixture<SuggestMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestMovieComponent]
    });
    fixture = TestBed.createComponent(SuggestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
