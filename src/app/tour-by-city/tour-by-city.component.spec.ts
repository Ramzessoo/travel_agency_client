import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourByCityComponent } from './tour-by-city.component';

describe('TourByCityComponent', () => {
  let component: TourByCityComponent;
  let fixture: ComponentFixture<TourByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourByCityComponent]
    });
    fixture = TestBed.createComponent(TourByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
