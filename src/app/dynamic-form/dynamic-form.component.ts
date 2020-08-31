/*
  presents field types defined in model as form fields
*/
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldBase } from './form-field-base'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent  {
  @Input() field: FormFieldBase<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

}
