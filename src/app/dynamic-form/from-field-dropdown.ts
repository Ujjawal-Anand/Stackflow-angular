/* class to be used to render a dropdown form field */

import { FormFieldBase } from './form-field-base'

export class DropdownField extends FormFieldBase<string> {
    controlType = 'dropdown'
}