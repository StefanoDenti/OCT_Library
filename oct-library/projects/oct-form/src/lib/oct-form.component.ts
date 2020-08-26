import { Component, OnInit, Input } from '@angular/core';
import { OctFormModel } from './models/core/oct-form.model';
import { OctFormService } from './oct-form.service';

@Component({
  selector: 'oct-form',
  templateUrl: './oct-form.component.html',
  styles: [
  ],
  providers: [OctFormService]
})
export class OctFormComponent implements OnInit {
  constructor(public _formService: OctFormService) { }

  ngOnInit(): void {

  }

}
