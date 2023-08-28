import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPopularComponent } from './tour-popular.component';

describe('TourPopularComponent', () => {
  let component: TourPopularComponent;
  let fixture: ComponentFixture<TourPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourPopularComponent]
    });
    fixture = TestBed.createComponent(TourPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
