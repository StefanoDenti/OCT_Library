import { NgModule } from '@angular/core';
import { OctFormComponent } from './oct-form.component';
import { OctSectionComponent } from './components/oct-section/oct-section.component';
import { OctFieldComponent } from './components/oct-field/oct-field.component';
import { OctFormService } from './oct-form.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OctFormComponent, OctFieldComponent, OctSectionComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [OctFormComponent],
  providers: [OctFormService]
})
export class OctFormModule { }
