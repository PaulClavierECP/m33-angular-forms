// Ici notre objectif est de créer les propriétés qui nous intéressent le plus pour notre composant:

// On veut donner à notre input du formulaire:
// - value: valeur de l'input. De type dynamique même si on aura tendance à spécifier des strings à chaque fois
// - name: pour identifier l'input
// - label: le texte au dessus de notre input
// - required: l'input est-il required pour valider notre formulaire ?
// - type: C'est l'aspect principal ici. Il va nous servir à identifier le type du control: dropdown, text, number, checkbox ...
// - options: un {name, value} qui te permet de renseigner des options

// Rajouter ? Error message, placeholder, min/max, minLength/maxLength par ex
export type Model<T> = {
  value?: T;
  name?: string;
  label?: string;
  options?: { name: string; value: string }[];
  type?: string;
  required?: boolean;
};

export class BaseModel<T> {
  value: T;
  name: string;
  options: { name: string; value: string }[];
  label: string;
  type?: string;
  required?: boolean;

  constructor(model: Model<T> = {}) {
    this.value = model.value;
    this.name = model.name;
    this.label = model.label;
    this.options = model.options;
    this.type = model.type;
    this.required = model.required;
  }
}
