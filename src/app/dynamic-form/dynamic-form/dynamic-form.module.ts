import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicElementModule } from '../dynamic-element/dynamic-element.module';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicElementModule,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
