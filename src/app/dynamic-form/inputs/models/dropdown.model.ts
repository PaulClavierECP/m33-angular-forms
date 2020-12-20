// On veut créer une class qui va se baser sur le base model, qui l'"extends" mais qui va fixer son type

import { BaseModel } from './base.model';

export class DropdownModel extends BaseModel<string> {
  type = 'dropdown';
}
