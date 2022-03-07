import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheApartmentComponent } from './the-apartment.component';

describe('TheApartmentComponent', () => {
  let component: TheApartmentComponent;
  let fixture: ComponentFixture<TheApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
