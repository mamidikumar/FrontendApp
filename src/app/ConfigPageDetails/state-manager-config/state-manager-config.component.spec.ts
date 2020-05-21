import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagerConfigComponent } from './state-manager-config.component';

describe('StateManagerConfigComponent', () => {
  let component: StateManagerConfigComponent;
  let fixture: ComponentFixture<StateManagerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
