import { ComponentFixture, TestBed } from '@angular/core/testing';


import { VerNavbarComponent } from './ver-navbar.component';

describe('VerNavbarComponent', () => {
  let component: VerNavbarComponent;
  let fixture: ComponentFixture<VerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
