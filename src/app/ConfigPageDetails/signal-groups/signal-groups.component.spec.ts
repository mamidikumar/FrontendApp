import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalGroupsComponent } from './signal-groups.component';

describe('SignalGroupsComponent', () => {
  let component: SignalGroupsComponent;
  let fixture: ComponentFixture<SignalGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
