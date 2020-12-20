import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicElementComponent } from '../dynamic-element/dynamic-element.component';
import { DropdownInputModule } from '../inputs/dropdown-input/dropdown-input.module';
import { TextInputModule } from '../inputs/tex-input/text-input.module';

@NgModule({
  declarations: [DynamicElementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownInputModule,
    TextInputModule,
  ],
  exports: [DynamicElementComponent],
})
export class DynamicElementModule {}
