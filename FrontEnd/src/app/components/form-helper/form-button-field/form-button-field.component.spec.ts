import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonFieldComponent } from './form-button-field.component';

describe('FormButtonFieldComponent', () => {
  let component: FormButtonFieldComponent;
  let fixture: ComponentFixture<FormButtonFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormButtonFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
