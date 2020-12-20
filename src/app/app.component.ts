import { Component } from '@angular/core';
import { BaseModel } from './dynamic-form/inputs/models/base.model';
import { DropdownModel } from './dynamic-form/inputs/models/dropdown.model';
import { TextModel } from './dynamic-form/inputs/models/text.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-m33-angular';

  constructor(private fb: FormBuilder) {}

  reactiveForm = this.fb.group({});

  models: BaseModel<string>[] = [
    new DropdownModel({
      name: 'player',
      label: 'Who is the best actress ?',
      options: [
        { name: 'messi', value: 'Romy Shneider' },
        { name: 'maradona', value: 'Brigitte Bardot' },
      ],
      required: true,
    }),
    new DropdownModel({
      name: 'truc',
      label: 'Est-ce que la formation vous a plu ?',
      options: [
        { name: 'no', value: 'NO' },
        { name: 'yes', value: 'YES' },
      ],
    }),
    new DropdownModel({
      name: 'coach',
      label: 'Who is the best coach of all time ?',
      options: [
        { name: 'bielsa', value: 'Marcelo Bielsa' },
        { name: 'cruyff', value: 'Johan Cruyff' },
        { name: 'guardiola', value: 'Pep Guardiola' },
        { name: 'lobanovski', value: 'Valeriy Lobanovskyi' },
        { name: 'sacchi', value: 'Arrigo Sacchi' },
      ],
    }),
    new TextModel({
      name: 'additionnal',
      label: 'Did we miss anyone ?',
      required: false,
    }),
  ];
}
