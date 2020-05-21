import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpRawFileComponent } from './DumpRawFile.component';

describe('DisplayTabComponent', () => {
  let component: DumpRawFileComponent;
  let fixture: ComponentFixture<DumpRawFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpRawFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpRawFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
