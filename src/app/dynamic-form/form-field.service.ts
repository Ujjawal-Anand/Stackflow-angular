/*
    Supplies query form fields in the form of an array 
    bound to @Input fields
*/

import { Injectable } from '@angular/core';

import { DropdownField } from './from-field-dropdown';
import { FormFieldBase } from './form-field-base';
import { TextboxField } from './form-field-textbox';
import { of } from 'rxjs'

@Injectable() 
export class FormFieldService {
    getFormFields() {
        const BooleanFormFieldOption = [
            {key: ' ', value:' '},
            {key: 'True', value: 'true'},
            {key: 'False', value: 'false'}
        ]
    
        const fields: FormFieldBase<string>[] = [
            
            new TextboxField( {
                key: 'title',
                label: 'Title',
                value: '',
                required: false,
                order: 1
            }),

            new TextboxField( {
                key: 'body',
                label: 'Body',
                value: '',
                required: false,
                order: 2
            }),

            new TextboxField( {
                key: 'q',
                label: 'Q',
                value: '',
                required: false,
                order: 3
            }),

            new DropdownField({
                key: 'sort',
                label: 'Sort',
                options: [
                    {key: 'Activity', value: 'activity'},
                    {key: 'Votes', value: 'votes'},
                    {key: 'Creation', value: 'creation'},
                    {key: 'Relevance', value: 'relevance'}
                ],
                order: 4
            }),

            new DropdownField({
                key: 'order',
                label: 'Order',
                options: [
                    {key: 'Ascending', value: 'asc'},
                    {key: 'Descending', value: 'dsc'}

                ],
                order: 5
            }),

            new DropdownField({
                key: 'closed',
                label: 'Closed',
                options: BooleanFormFieldOption
                ,
                order: 6
            }),

            new DropdownField({
                key: 'accepted',
                label: 'Accepted',
                options: BooleanFormFieldOption,
                order: 7
            }),

            new TextboxField( {
                key: 'fromdate',
                label: 'FromDate',
                value: '',
                required: false,
                order: 8
            }),

            new TextboxField( {
                key: 'views',
                label: 'Views',
                value: '',
                required: false,
                order: 9
            }),

            new TextboxField( {
                key: 'answers',
                label: 'Answers',
                value: '',
                required: false,
                order: 10
            }),

            new TextboxField( {
                key: 'todate',
                label: 'Todate',
                value: '',
                required: false,
                order: 11
            }),

            new TextboxField( {
                key: 'notagged',
                label: 'Notagged',
                value: '',
                required: false,
                order: 12
            }),

            new TextboxField( {
                key: 'tagged',
                label: 'Tagged',
                value: '',
                required: false,
                order: 13
            }),

            new TextboxField( {
                key: 'min',
                label: 'Min',
                value: '',
                required: false,
                order: 14
            }),

            new TextboxField( {
                key: 'max',
                label: 'Max',
                value: '',
                required: false,
                order: 15
            }),

            new DropdownField({
                key: 'migrated',
                label: 'Migrated',
                options: BooleanFormFieldOption,
                order: 16
            }),

            new DropdownField({
                key: 'notice',
                label: 'Notice',
                options: BooleanFormFieldOption,
                order: 17
            }),

            new TextboxField( {
                key: 'user',
                label: 'User',
                value: '',
                required: false,
                order: 18
            }),

            new TextboxField( {
                key: 'url',
                label: 'Url',
                value: '',
                required: false,
                order: 19
            }),

            new DropdownField({
                key: 'wiki',
                label: 'Wiki',
                options: BooleanFormFieldOption,
                order: 20
            }),

            new TextboxField( {
                key: 'page',
                label: 'Page',
                value: '',
                required: false,
                order: 21
            }),

            new TextboxField( {
                key: 'pagesize',
                label: 'PageSize',
                value: '',
                required: false,
                order: 22
            })  
        ];
        return of(fields.sort((a, b) => a.order - b.order));
    }
}