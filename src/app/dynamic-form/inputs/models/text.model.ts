import { BaseModel } from './base.model';

// On veut créer une class qui va se baser sur le base model, qui l'"extends" mais qui va fixer son type égal à text
export class TextModel extends BaseModel<string> {
  type = 'text';
}
