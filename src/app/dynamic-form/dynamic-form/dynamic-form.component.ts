import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from '../inputs/models/base.model';
import { FormGroup } from '@angular/forms';
import { ModelControlService } from '../model-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  // Ici on veut gérer l'input des models que l'on va donner dans notre app.component.html
  // On veut créer un form qu'au onInit on va "remplir" avec le ModelControlService
  // Enfin on veut créer le onSubmit

  form: FormGroup;
  payLoad = '';

  @Input() models: BaseModel<string>[] = [];

  constructor(private mcs: ModelControlService) {}

  ngOnInit() {
    this.form = this.mcs.makeFormGroup(this.models);
  }

  onSubmit() {
    if (this.form.valid) {
      this.payLoad = this.form.get('truc').value;
    }
  }
}

// @Input() models: BaseModel<string>[] = [];
// form: FormGroup;
// payLoad = '';

// constructor(private mcs: ModelControlService) {}

// ngOnInit() {
//   this.form = this.mcs.makeFormGroup(this.models);
// }
