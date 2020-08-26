import { NgModule } from '@angular/core';
import { OctFormComponent } from './oct-form.component';
import { OctSectionComponent } from './components/oct-section/oct-section.component';
import { OctFieldComponent } from './components/oct-field/oct-field.component';



@NgModule({
  declarations: [OctFormComponent, OctFieldComponent, OctSectionComponent],
  imports: [],
  exports: [OctFormComponent]
})
export class OctFormModule { }
