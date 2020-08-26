import { Injectable, OnInit } from '@angular/core';
import { ResultMessage } from './models/support/result-message.model';
import { OctFormModel } from './models/core/oct-form.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OctFormService {
  private form: OctFormModel = new OctFormModel();
  public $formChange = new BehaviorSubject<OctFormModel>(null);

  constructor() {

  }

  public InitializeForm(form: OctFormModel): ResultMessage {
    console.log('Recived Form', form);

    const result: ResultMessage = new ResultMessage();
    if (form) {
      this.form = form;
      this.$formChange.next(this.form);
      result.SetSuccess('Form loaded.');
    }
    else {
      result.SetError('Form null or undefined.');
    }
    return result;
  }



}
