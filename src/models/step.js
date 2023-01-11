class Step {
  constructor(id, title, imageUrl, ingredients, materials, length_in_minutes, description, warning ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients; //array<StepIngredient>
    this.materials = materials; //array<StepMaterial>
    this.length_in_minutes = length_in_minutes;
    this.description = description;
    this.warning = warning;
    // this.outputs = outputs; //array<StepOutput>
  }
}
export default Step;