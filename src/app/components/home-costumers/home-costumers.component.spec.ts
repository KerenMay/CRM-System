import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCostumersComponent } from './home-costumers.component';

describe('HomeCostumersComponent', () => {
  let component: HomeCostumersComponent;
  let fixture: ComponentFixture<HomeCostumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCostumersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
