import { Component, OnInit, Input, Output } from '@angular/core';
import { OctSectionModel } from '../../models/core/oct-section.model';
import { OctFormService } from '../../oct-form.service';
import { OctFieldModel } from '../../models/core/oct-field.model';
import { FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'oct-field',
  templateUrl: './oct-field.component.html',
  styleUrls: ['./oct-field.component.css']
})
export class OctFieldComponent implements OnInit {
  value: any;
  input = new FormControl('');


  @Input() field: OctFieldModel;
  constructor(public _formService: OctFormService) { }

  ngOnInit(): void {

    this.initField();

  }
  initField(): void {
    console.log("FIELD", this.field);
    if (this.field.value) {
      this.input.setValue(this.field.value);
    }
    let validators: ValidatorFn[] = []
    if (this.field.validation.required) {
      validators.push(Validators.required);
    }
    if (this.field.type === 'number' && this.field.validation.max) {
      validators.push(Validators.max(this.field.validation.max));
    }
    if (this.field.type === 'number' && this.field.validation.min) {
      validators.push(Validators.min(this.field.validation.min));
    }
    if (this.field.type === 'text' && this.field.validation.max) {
      validators.push(Validators.maxLength(this.field.validation.max));
    }
    if (this.field.type === 'text' && this.field.validation.min) {
      validators.push(Validators.minLength(this.field.validation.min));
    }
    if (this.field.validation.regEx) {
      validators.push(Validators.pattern(this.field.validation.regEx));
    }
    this.input.setValidators(validators);
    this.input.updateValueAndValidity();
  }

  getErrorMessage(): string {
    console.log('INPUT', this.input);
    if (this.input.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.input.hasError('min')) {
      return 'Min error';
    }

    return this.input.hasError('max') ? 'Max error' : '';
  }
  setValue(): void {
    // const indexSection = this._formService.form.sections.findIndex(s => s.id === this.field.sectionId);
    // if (indexSection !== -1) {
    //   const indexField = this._formService.form.sections[indexSection].fields.findIndex(f => f.id = this.field.id);
    //   this._formService.form.sections[indexSection].fields[indexField].value = this.value;
    // }
  }

}
