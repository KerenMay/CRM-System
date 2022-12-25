import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorNavbarComponent } from './hor-navbar.component';

describe('HorNavbarComponent', () => {
  let component: HorNavbarComponent;
  let fixture: ComponentFixture<HorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
