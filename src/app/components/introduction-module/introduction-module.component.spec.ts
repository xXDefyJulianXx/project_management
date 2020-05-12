import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionModuleComponent } from './introduction-module.component';

describe('IntroductionModuleComponent', () => {
  let component: IntroductionModuleComponent;
  let fixture: ComponentFixture<IntroductionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
