import { Component } from '@angular/core';

import { FormFieldService } from './dynamic-form/form-field.service';
import { FormFieldBase } from './dynamic-form/form-field-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:  [FormFieldService]
})
export class AppComponent {
  fields$: Observable<FormFieldBase<any>[]>;

  constructor(service: FormFieldService) {
    this.fields$ = service.getFormFields();
  }
}