/* class to be used to render a textbox input form field */
import { FormFieldBase } from './form-field-base';

export class TextboxField extends FormFieldBase<string> {
    controlType = 'textbox'
}