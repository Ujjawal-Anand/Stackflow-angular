import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

import { FormFieldBase } from './form-field-base';
import { FormControlService } from './form-control.service';
import { PageService } from './page.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: ['./dynamic-form.component.css'],
  providers: [ FormControlService, PageService ]
})

export class DynamicFormComponent implements OnInit {
  @Input() fields: FormFieldBase<string>[] = [];
  form: FormGroup;
  payload: any[]

  // pager object
  pager: any = {};
  //paged items
  pagedItems: any[];

  constructor(private fcs: FormControlService, 
              private http: HttpClient,
              private pageService: PageService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  onSubmit() {
    var formData = this.form.getRawValue();
    console.log(formData)
    formData['site'] = 'stackoverflow'

    this.http.get('https://api.stackexchange.com/2.2/search/advanced?'+this.dictToURI(formData))
              .subscribe( (response) => 
                {
                  this.payload =  response["items"]
                  this.setPage(1);
                },
              (error) => console.log(error)
    )
  }

  dictToURI(dict: any = {}) {
    // convert dict into get request parameter
    var str = [];
    for(var p in dict){
      if(dict[p] !== '')
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
    }
    return str.join("&");
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pageService
                      .getPager(this.payload.length, page);
    
    // get current page of items
    this.pagedItems = this.payload.slice(this.pager.startIndex,
                                          this.pager.endIndex+1) 
  }
}