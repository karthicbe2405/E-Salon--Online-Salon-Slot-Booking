import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSlotComponent } from './generate-slot.component';

describe('GenerateSlotComponent', () => {
  let component: GenerateSlotComponent;
  let fixture: ComponentFixture<GenerateSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
