import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourByCountryComponent } from './tour-by-country.component';

describe('TourByCountryComponent', () => {
  let component: TourByCountryComponent;
  let fixture: ComponentFixture<TourByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourByCountryComponent]
    });
    fixture = TestBed.createComponent(TourByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
