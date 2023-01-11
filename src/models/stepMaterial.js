class StepMaterial {
  constructor(id, material, quantity, img, style, notes) {
    this.id = id;
    this.material = material;
    this.quantity = quantity;    
    this.notes = notes;    
    this.img = img; // image should be unique to material_uuid & quantity
  }
}

export default StepIngredient;