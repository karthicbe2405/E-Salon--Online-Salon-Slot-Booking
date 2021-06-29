import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonsDashboardComponent } from './salons-dashboard.component';

describe('SalonsDashboardComponent', () => {
  let component: SalonsDashboardComponent;
  let fixture: ComponentFixture<SalonsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
