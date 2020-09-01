import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { FormFieldBase } from './form-field-base';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: ['./dynamic-form.component.css'],
  providers: [ FormControlService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: FormFieldBase<string>[] = [];
  form: FormGroup;
  payload = []

  constructor(private fcs: FormControlService, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  onSubmit() {
    var formData = this.form.getRawValue();
    console.log(formData)
    formData['site'] = 'stackoverflow'

    this.http.get('https://api.stackexchange.com/2.2/search/advanced?'+this.dictToURI(formData))
              .subscribe( (response) => this.payload =  response["items"],
              (error) => console.log(error)
    )
  }

  dictToURI(dict) {
    // convert dict into get request parameter
    var str = [];
    for(var p in dict){
      if(dict[p] !== '')
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
    }
    return str.join("&");
  }
}