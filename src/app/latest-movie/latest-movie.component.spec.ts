import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMovieComponent } from './latest-movie.component';

describe('LatestMovieComponent', () => {
  let component: LatestMovieComponent;
  let fixture: ComponentFixture<LatestMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestMovieComponent]
    });
    fixture = TestBed.createComponent(LatestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
