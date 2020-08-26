import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctFormComponent } from './oct-form.component';

describe('OctFormComponent', () => {
  let component: OctFormComponent;
  let fixture: ComponentFixture<OctFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
