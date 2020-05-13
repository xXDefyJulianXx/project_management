import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningGroupComponent } from './planning-group.component';

describe('PlanningGroupComponent', () => {
  let component: PlanningGroupComponent;
  let fixture: ComponentFixture<PlanningGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
