import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarConfigComponent } from './status-bar-config.component';

describe('StatusBarConfigComponent', () => {
  let component: StatusBarConfigComponent;
  let fixture: ComponentFixture<StatusBarConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
