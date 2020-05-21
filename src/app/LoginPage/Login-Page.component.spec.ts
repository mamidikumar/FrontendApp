import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginPageComponent } from './Login-Page.component';

describe('HomeComponent', () => {
  let component: HomeLoginPageComponent;
  let fixture: ComponentFixture<HomeLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
