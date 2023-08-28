import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourByContinentComponent } from './tour-by-continent.component';

describe('TourByContinentComponent', () => {
  let component: TourByContinentComponent;
  let fixture: ComponentFixture<TourByContinentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourByContinentComponent]
    });
    fixture = TestBed.createComponent(TourByContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
