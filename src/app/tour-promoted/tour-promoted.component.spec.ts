import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPromotedComponent } from './tour-promoted.component';

describe('TourPromotedComponent', () => {
  let component: TourPromotedComponent;
  let fixture: ComponentFixture<TourPromotedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourPromotedComponent]
    });
    fixture = TestBed.createComponent(TourPromotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
