import { Component, Input } from '@angular/core';
import { BaseModel } from '../inputs/models/base.model';
import { FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-dynamic-element',
  templateUrl: './dynamic-element.component.html',
  styleUrls: ['./dynamic-element.component.scss'],
})
export class DynamicElementComponent {
  // Objectif de ce composant:
  // 1. Afficher le bon composant en fonction du model qu'il reçoit.
  // 2. Lier la View à un FormControl au sein du FormGroup global qu'on définit

  // Méthode: Il reçoit un BaseModel et un FormGroup en inputs et
  constructor() {}

  @Input() model: BaseModel<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.model.name].valid;
  }
}
