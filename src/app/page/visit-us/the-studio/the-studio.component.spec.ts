import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStudioComponent } from './the-studio.component';

describe('TheStudioComponent', () => {
  let component: TheStudioComponent;
  let fixture: ComponentFixture<TheStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
