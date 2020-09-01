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
  payload: any[] = [];

  // pager object
  pager: any = {};
  //paged items
  pagedItems: any[];
  isLoading: boolean = false;
  headerText: String = "No Data Found, Search Using Filters"

  constructor(private fcs: FormControlService, 
              private http: HttpClient,
              private pageService: PageService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
  }

  onSubmit() {
    var formData = this.form.getRawValue();
    this.isLoading = true;
    formData['site'] = 'stackoverflow'

    this.http.get('https://api.stackexchange.com/2.2/search/advanced?'+this.dictToURI(formData))
              .subscribe( (response) => 
                {
                  this.payload =  response["items"]
                  this.setPage(1);
                  this.isLoading = false;
                  console.log(this.payload)
                },
              (error) => 
              {
                console.log(error)
                this.isLoading = false;
                this.headerText = JSON.stringify(error)+"<br/>Please Try Again"
              }
    );
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
    this.isLoading = true;
    // get pager object from service
    this.pager = this.pageService
                      .getPager(this.payload.length, page);
    if (page < 1 || page > this.pager.totalPages) {
      console.log("returned");
      console.log(page)
      return;
    }

    
    
    // get current page of items
    this.pagedItems = this.payload.slice(this.pager.startIndex,
                                          this.pager.endIndex+1);
    console.log(this.pagedItems);
    this.isLoading = false; 
  }
}