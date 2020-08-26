import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctSectionComponent } from './oct-section.component';

describe('OctSectionComponent', () => {
  let component: OctSectionComponent;
  let fixture: ComponentFixture<OctSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
