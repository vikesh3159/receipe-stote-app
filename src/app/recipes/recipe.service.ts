import { Injectable, signal } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
  //   ),
  // ];
  private recipesSignal = signal<Recipe[]>([]);
  recipes = this.recipesSignal.asReadonly();

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipesSignal.set(recipes.slice());
  }

  getRecipes() {
    return this.recipesSignal().slice();
  }

  getRecipe(index: number) {
    return this.recipesSignal()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipesSignal.update((recipes) => [...recipes, recipe]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesSignal.update((recipes) =>
      recipes.map((recipe, recipeIndex) => recipeIndex === index ? newRecipe : recipe)
    );
  }

  deleteRecipe(index: number) {
    this.recipesSignal.update((recipes) => recipes.filter((_, recipeIndex) => recipeIndex !== index));
  }
}
