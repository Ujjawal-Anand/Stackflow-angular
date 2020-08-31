import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldBase } from './form-field-base';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FormControlService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: FormFieldBase<string>[] = [];
  form: FormGroup;
  payload = ''

  constructor(private fcs: FormControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}