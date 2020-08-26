import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctFieldComponent } from './oct-field.component';

describe('OctFieldComponent', () => {
  let component: OctFieldComponent;
  let fixture: ComponentFixture<OctFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OctFieldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
