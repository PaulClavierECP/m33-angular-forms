import { Component, Input } from '@angular/core';
import { BaseModel } from '../models/base.model';
import { FormGroup } from '@angular/forms';
import { DropdownModel } from '../models/dropdown.model';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
})
export class DropdownInputComponent {
  @Input() model: DropdownModel;
  @Input() group: FormGroup;

  constructor() {}
}
