import { Injectable, OnInit } from '@angular/core';
import { ResultMessage } from './models/support/result-message.model';
import { OctFormModel } from './models/core/oct-form.model';

@Injectable()
export class OctFormService {
  form: OctFormModel;
  constructor() {

  }

  public InitializeForm(form: OctFormModel): ResultMessage {
    const result: ResultMessage = new ResultMessage()
    if (form) {
      this.form = form;
      result.SetSuccess('Form loaded.');
    }
    else {
      result.SetError('Form null or undefined.');
    }
    return result;
  }



}
