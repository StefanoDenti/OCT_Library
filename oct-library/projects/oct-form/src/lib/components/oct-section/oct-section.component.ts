import { Component, OnInit, Input } from '@angular/core';
import { OctSectionModel } from '../../models/core/oct-section.model';
import { OctFormService } from '../../oct-form.service';

@Component({
  selector: 'oct-section',
  templateUrl: './oct-section.component.html',
  styleUrls: ['./oct-section.component.css']
})
export class OctSectionComponent implements OnInit {
  @Input() section: OctSectionModel = null;

  constructor(public _formService: OctFormService) { }

  ngOnInit(): void {
    console.log("SECTION", this.section)
  }
}
