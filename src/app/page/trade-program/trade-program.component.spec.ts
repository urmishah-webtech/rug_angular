import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeProgramComponent } from './trade-program.component';

describe('TradeProgramComponent', () => {
  let component: TradeProgramComponent;
  let fixture: ComponentFixture<TradeProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
