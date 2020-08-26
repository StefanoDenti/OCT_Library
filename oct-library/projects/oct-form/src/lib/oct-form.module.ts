import { NgModule } from '@angular/core';
import { OctFormComponent } from './oct-form.component';
import { OctSectionComponent } from './components/oct-section/oct-section.component';
import { OctFieldComponent } from './components/oct-field/oct-field.component';
import { OctFormService } from './oct-form.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [OctFormComponent, OctFieldComponent, OctSectionComponent],
  imports: [
    BrowserModule
  ],
  exports: [OctFormComponent],
  providers: [OctFormService]
})
export class OctFormModule { }
