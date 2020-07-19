import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortListComponent } from './air-port-list.component';

describe('AirPortListComponent', () => {
  let component: AirPortListComponent;
  let fixture: ComponentFixture<AirPortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
