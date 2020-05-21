import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveformPresentationConfigComponent } from './waveform-presentation-config.component';

describe('WaveformPresentationConfigComponent', () => {
  let component: WaveformPresentationConfigComponent;
  let fixture: ComponentFixture<WaveformPresentationConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveformPresentationConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveformPresentationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
