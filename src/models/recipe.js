class Recipe {
  constructor(recipeId, title, imageUrl, ingredients,stepIngredients, materials, steps, total_length_in_minutes, active_length_in_minutes) {
    this.recipeId = recipeId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients; //array<StepIngredient>
    this.stepIngredients = stepIngredients; //array<StepIngredient>
    this.materials = materials; //array<StepMaterial>
    this.steps = steps; //array<Step>
    this.total_length_in_minutes = total_length_in_minutes;
    this.active_length_in_minutes = active_length_in_minutes;
  }
}
export default Recipe;