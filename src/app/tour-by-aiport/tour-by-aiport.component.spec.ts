import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourByAiportComponent } from './tour-by-aiport.component';

describe('TourByAiportComponent', () => {
  let component: TourByAiportComponent;
  let fixture: ComponentFixture<TourByAiportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourByAiportComponent]
    });
    fixture = TestBed.createComponent(TourByAiportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
