import { Component, OnInit, Input, Output } from '@angular/core';
import { OctSectionModel } from '../../models/core/oct-section.model';
import { OctFormService } from '../../oct-form.service';
import { OctFieldModel } from '../../models/core/oct-field.model';

@Component({
  selector: 'oct-field',
  templateUrl: './oct-field.component.html',
  styleUrls: ['./oct-field.component.css']
})
export class OctFieldComponent implements OnInit {
  value: any;
  @Input() field: OctFieldModel;
  constructor(public _formService: OctFormService) { }

  ngOnInit(): void {
  }

  setValue(): void {
    // const indexSection = this._formService.form.sections.findIndex(s => s.id === this.field.sectionId);
    // if (indexSection !== -1) {
    //   const indexField = this._formService.form.sections[indexSection].fields.findIndex(f => f.id = this.field.id);
    //   this._formService.form.sections[indexSection].fields[indexField].value = this.value;
    // }
  }

}
