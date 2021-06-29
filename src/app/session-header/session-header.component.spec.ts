import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionHeaderComponent } from './session-header.component';

describe('SessionHeaderComponent', () => {
  let component: SessionHeaderComponent;
  let fixture: ComponentFixture<SessionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
