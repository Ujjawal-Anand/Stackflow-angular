import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component'
import { DynamicFormFieldComponent } from './dynamic-form/dynamic-form-field.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
