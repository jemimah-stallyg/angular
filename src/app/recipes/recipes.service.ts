import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipes[]>();
     

    recipes: Recipes[]=[
        new Recipes('Super 6s Bucket Meal',
        'Trending',
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002049.jpg?ver=14.89',
        [
            new Ingredient('crispy fried chicken', 6),
            new Ingredient('french fries', 50),
            new Ingredient('chicken wings',6),
            new Ingredient('pepsi',1)
        ]),
        new Recipes('Creamy Garlic Shrimp with Parmesan',
        'Soooo tasty',
        'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2020/08/Creamy-Garlic-Shrimp-with-Parmesan-Easy-Keto-by-Blondelish.com_-410x273.jpeg',
        [
            new Ingredient('shrimp with extra cheese', 1),
            new Ingredient('shrimp with medium cheese', 2)
        ])
      ];
      constructor(private slService: ShoppingListService ){}
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index];
      }


      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIncredients(ingredients);
      }

      addRecipe(recipe: Recipes){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipes){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
      
      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}