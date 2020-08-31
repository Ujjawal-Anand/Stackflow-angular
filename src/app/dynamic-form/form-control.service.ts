/* collects a set of FormGroup instances that consume 
    the metadata from the form model, search query parmaeters in this case 
*/

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFieldBase } from './form-field-base';

@Injectable()
export class FormControlService {
    constructor() {}

    toFormGroup(fields: FormFieldBase<string>[]) {
        const group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required ? new FormControl(
                field.value || '', Validators.required) : 
                new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
