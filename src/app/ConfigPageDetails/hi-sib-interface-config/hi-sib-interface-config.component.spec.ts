import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiSIBInterfaceConfigComponent } from './hi-sib-interface-config.component';

describe('HiSIBInterfaceConfigComponent', () => {
  let component: HiSIBInterfaceConfigComponent;
  let fixture: ComponentFixture<HiSIBInterfaceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiSIBInterfaceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiSIBInterfaceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
