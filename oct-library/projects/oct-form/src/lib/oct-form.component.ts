import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OctFormService } from './oct-form.service';
import { OctFormModel } from './models/core/oct-form.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'oct-form',
  templateUrl: './oct-form.component.html',
})
export class OctFormComponent implements OnInit, OnDestroy {
  public form: OctFormModel;

  private $onDestroing: Subject<any> = new Subject<any>();

  constructor(public _formService: OctFormService) {

    this._formService.$formChange.pipe(
      takeUntil(this.$onDestroing)
    ).subscribe(form => {
      if (form) {
        this.form = form;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.$onDestroing.next();
  }
}
