export const categories = [
  {
    id: "c-1",
    name: 'Cookies',
    photo_url:
    'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg'
  },
  {
    id: "c-2",
    name: 'Dinners',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },  
];

export const ingredients = [
  {
    ingredientId: "i-butter",
    name: 'Butter',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: "i-brown-sugar",
    name: 'Brown Sugar',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: "i-white-sugar",
    name: 'White Sugar',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: "i-large-egg",
    name: 'Large Egg',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: "i-vanilla-extract",
    name: 'Vanilla Extract',
    photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId:  "i-salt",
    name: 'Salt',
    photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: "i-baking-soda",
    name: 'Baking Soda',
    photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: "i-all-purpose-flour",
    name: 'All Purpose Flour',
    photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: "i-semi-sweet-chocolate-chips",
    name: 'Semi-sweet Chocolate Chips',
    photo_url: 'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
];

export const materials = [
]

export const recipes = [
  {
    recipeId: "r-chocolate-chip-cookies",
    categoryId: "c-1",
    title: 'Chocolate Chip Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    total_length_in_minutes: 30.0,
    prep_time_in_minutes: 15.0,
    materials: [], //materials for all steps
    ingredients: [["i-butter", '200ml'], ["i-white-sugar", '5g'], ["i-brown-sugar", '300g']], //ingredients for all steps
    steps: ["s-0","s-1", "s-2", "s-3"],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },
];

export const steps = [
  { 
    stepId: "s-0",
    stepIngredients: ["si-0", "si-1", "si-2"],
    stepMaterials: [],
    lengthInMinutes: 3.0,
    description: 'Add butter to a bowl or stand mixer and use a paddle to cream the butter. Add the brown sugar and beat until mixed. Next add the white sugar and mix until light and fluffy.',
    warning: 'Butter must be at room temperature',
  },
  { 
    stepId: "s-1",
    stepIngredients: ["si-3", "si-4"],
    stepMaterials: [],
    lengthInMinutes: 2.0,
    description: 'Add the eggs and vanilla and beat until combined.',
    warning: '',
  },
  {
    stepId:  "s-2",
    stepIngredients: ["si-5", "si-6", "si-7"],
    stepMaterials: [],
    lengthInMinutes: 2.0,
    description: 'Add the salt, baking soda, and flour and mix until combined.',
    warning: '',
  },
  {
    stepId: "s-3",
    stepIngredients: ["si-8"],
    stepMaterials: [],
    lengthInMinutes: 2.0,
    description: 'Add the chocolate chips and mix until combined.',
    warning: '',
  },
]

export const stepIngredients = [
  {
    stepIngredientId: "si-0",
    ingredientId: "i-butter",
    amount: "8",
    units: "Tbsp"
  },
  {
    stepIngredientId: "si-1",
    ingredientId: "i-brown-sugar",
    amount: "80",
    units: "g"
  },
  {
    stepIngredientId: "si-2",
    ingredientId: "i-white-sugar",
    amount: "70",
    units: "g"
  },
  {
    stepIngredientId: "si-3",
    ingredientId: "i-large-egg",
    amount: "1",
    units: ""
  },
  {
    stepIngredientId: "si-3",
    ingredientId: "i-vanilla-extract",
    amount: "5",
    units: "g"
  },
  {
    stepIngredientId: "si-4",
    ingredientId: "i-salt",
    amount: "2",
    units: "g"
  },
  {
    stepIngredientId: "si-5",
    ingredientId: "i-baking-soda",
    amount: "2",
    units: "g"
  },
  {
    stepIngredientId: "si-6",
    ingredientId: "i-all-purpose-flour",
    amount: "180",
    units: "g"
  },
  {
    stepIngredientId: "si-7",
    ingredientId: "i-semi-sweet-chocolate-chips",
    amount: "210",
    units: "g"
  },
]

export const stepMaterials = [
]

