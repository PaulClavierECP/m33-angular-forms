import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextModel } from '../models/text.model';

@Component({
  selector: 'app-tex-input',
  templateUrl: './tex-input.component.html',
  styleUrls: ['./tex-input.component.scss'],
})
export class TexInputComponent {
  @Input() model: TextModel;
  @Input() group: FormGroup;
  constructor() {}
}
