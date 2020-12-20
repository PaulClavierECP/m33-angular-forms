import { Injectable } from '@angular/core';
import { BaseModel } from './inputs/models/base.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ModelControlService {
  // OBJECTIF: Ici on veut créer le FormGroup qui va être associé avec notre formulaire et qui sera passé à tous nos composants.

  // Il serait trop pénble de devoir définir tous les formControl dans tous les composants.
  // Pour effectuer des validations groupées par exemple aussi il est très difficile de faire comme ceci.

  // METHODO: créer une fonction makeFormGroup qui va prendre en entrée les models (liste de BaseModel) qu'on lui donne et va en faire un FormGroup.
  // La fonction crée un group qui est un dico. Les clefs seront les noms du model et les value un formControl qui met un validators required en cas de besoin

  constructor() {}

  makeFormGroup(models: BaseModel<string>[]) {
    const group: any = {};

    models.forEach((model) => {
      if (model.required) {
        group[model.name] = new FormControl(model.value, Validators.required);
      } else {
        group[model.name] = new FormControl(model.value);
      }
    });

    return new FormGroup(group);
  }
}

// makeFormGroup(models: ModelBase<string>[]) {
//   const group: any = {};

//   models.forEach((model) => {
//     group[model.name] = model.required
//       ? new FormControl(model.value || '', Validators.required)
//       : new FormControl(model.value || '');
//   });
//   return new FormGroup(group);
// }
