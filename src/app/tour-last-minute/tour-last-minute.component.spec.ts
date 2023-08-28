import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourLastMinuteComponent } from './tour-last-minute.component';

describe('TourLastMinuteComponent', () => {
  let component: TourLastMinuteComponent;
  let fixture: ComponentFixture<TourLastMinuteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourLastMinuteComponent]
    });
    fixture = TestBed.createComponent(TourLastMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
