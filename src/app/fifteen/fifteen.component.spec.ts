import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifteenComponent } from './fifteen.component';

describe('FifteenComponent', () => {
  let component: FifteenComponent;
  let fixture: ComponentFixture<FifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
