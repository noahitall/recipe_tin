import { Text } from 'react-native';
import React, { Component } from 'react';
import { recipes, categories, ingredients, stepIngredients, steps } from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getStepById(stepId) {
  let step;
  steps.map(data => {
    if (data.stepId == stepId) {
      step = data;
      //if there are stepIngredients for this step, look them up by id and assign them to step.stepIngredients
      if (data.stepIngredients) {
        step.stepIngredients = data.stepIngredients.map(stepIngredientId => {
          return getStepIngredientById(stepIngredientId); 
        });
      }
    }});
  return step;
}

export function getStepIngredientById(stepIngredientId) {
  let stepIngredient;
  stepIngredients.map(data => {
    if (data.stepIngredientId == stepIngredientId) {
      stepIngredient = data;
    }
  });
  return stepIngredient;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}
export function getStepIngredientName(stepIngredientID) {
  let name;
  stepIngredients.map(data => {
    if (data.stepIngredientId == stepIngredientID) {      
      let parts = []
      //assign parts amount to the array if it is not empty
      if (data.amount) parts = [...parts, data.amount]
      //assign parts units to the array if it is not empty
      if (data.units) parts = [...parts, data.units]
      //assign parts ingredientId to the array if it is not empty
      if (data.ingredientId) parts = [...parts, getIngredientName(data.ingredientId)]

      //  data.amount, data.ingredientId]
      name = parts.join(' ');
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
