class Recipe {
  constructor(recipeId, title, imageUrl, ingredients, materials, steps, total_length_in_minutes, prep_time_in_minutes) {
    this.recipeId = recipeId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients; //array<StepIngredient>
    this.materials = materials; //array<StepMaterial>
    this.steps = steps; //array<Step>
    this.total_length_in_minutes = total_length_in_minutes;
    this.prep_time_in_minutes = prep_time_in_minutes;
  }
}
export default Recipe;