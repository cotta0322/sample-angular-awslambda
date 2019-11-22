import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemFieldComponent } from './form-item-field.component';

describe('FormItemFieldComponent', () => {
  let component: FormItemFieldComponent;
  let fixture: ComponentFixture<FormItemFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
