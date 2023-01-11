class StepOutput {
  constructor(id, recipe, step, name, imageUrl) {
    this.id = id;
    this.recipe = recipe;
    this.step = step;    
    this.name = name;    //(i.e. roux)
    this.imageUrl = imageUrl; // image should be unique to recipe id and step id
  }
}

export default StepOutput;