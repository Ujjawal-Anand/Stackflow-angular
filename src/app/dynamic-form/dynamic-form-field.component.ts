/*
  creates form groups and populates them with controls 
  defined in the field model, specifying display and 
  validation rules.
*/

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldBase } from './form-field-base'

@Component({
  selector: 'app-form-field',
  templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent  {
  @Input() field: FormFieldBase<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

}
