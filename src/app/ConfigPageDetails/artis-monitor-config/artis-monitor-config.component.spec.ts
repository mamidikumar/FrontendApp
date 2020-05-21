import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisMonitorConfigComponent } from './artis-monitor-config.component';

describe('ArtisMonitorConfigComponent', () => {
  let component: ArtisMonitorConfigComponent;
  let fixture: ComponentFixture<ArtisMonitorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisMonitorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisMonitorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
