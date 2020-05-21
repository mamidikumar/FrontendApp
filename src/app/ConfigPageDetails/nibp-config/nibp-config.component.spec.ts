import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NIBPConfigComponent } from './nibp-config.component';

describe('NIBPConfigComponent', () => {
  let component: NIBPConfigComponent;
  let fixture: ComponentFixture<NIBPConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NIBPConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NIBPConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
