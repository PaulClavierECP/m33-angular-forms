import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form/dynamic-form.module';
import { DynamicElementModule } from './dynamic-form/dynamic-element/dynamic-element.module';

import { DropdownInputModule } from './dynamic-form/inputs/dropdown-input/dropdown-input.module';
import { TextInputModule } from './dynamic-form/inputs/tex-input/text-input.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownInputModule,
    TextInputModule,
    DynamicElementModule,
    DynamicFormModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
