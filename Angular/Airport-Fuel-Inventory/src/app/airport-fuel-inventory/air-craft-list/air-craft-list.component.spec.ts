import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCraftListComponent } from './air-craft-list.component';

describe('AirCraftListComponent', () => {
  let component: AirCraftListComponent;
  let fixture: ComponentFixture<AirCraftListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCraftListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCraftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
