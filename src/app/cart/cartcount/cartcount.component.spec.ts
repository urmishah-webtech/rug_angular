import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartcountComponent } from './cartcount.component';

describe('CartcountComponent', () => {
  let component: CartcountComponent;
  let fixture: ComponentFixture<CartcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
