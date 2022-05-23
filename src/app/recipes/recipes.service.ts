import { Recipes } from './recipe.model'
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {
     

    recipes: Recipes[]=[
        new Recipes('crispy fried chicken',
        '',
        'https://th.bing.com/th/id/OIP.OajGreIHuqBpGP9f53gMFwHaE7?pid=ImgDet&rs=1',
        [
            new Ingredient('Meat', 1),
            new Ingredient('french fries', 20)
        ]),
        new Recipes('Mojito Cocktail',
        '',
        'https://wallsdesk.com/wp-content/uploads/2017/01/Mojito-Wallpapers-HD.jpg',
        [
            new Ingredient('mojito', 1),
            new Ingredient('cocktail', 2)
        ])
      ];
      constructor(private slService: ShoppingListService ){}
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes.slice() [index];
      }


      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIncredients(ingredients);

      }
}