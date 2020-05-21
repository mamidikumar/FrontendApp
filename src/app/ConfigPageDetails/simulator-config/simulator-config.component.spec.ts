import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorConfigComponent } from './simulator-config.component';

describe('SimulatorConfigComponent', () => {
  let component: SimulatorConfigComponent;
  let fixture: ComponentFixture<SimulatorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
