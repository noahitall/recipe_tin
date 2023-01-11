class StepIngredient {
  constructor(id, ingredient, amount, units, img, style, notes) {
    this.id = id;
    this.ingredient = ingredient;
    this.amount = amount;    
    this.units = units;        
    this.style = style; //how ingredient should be prepared i.e. chopped, sliced, room temperature
    this.notes = notes;    
    this.img = img; // image should be unique to ingredient_uuid, quantity, & style
  }
}

export default StepIngredient;