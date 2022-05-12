import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] =[
        new Ingredient('apples', 5),
        new Ingredient('Tomatoes', 10) 
  ];

  getIngrdients(){
      return this.ingredients.slice() ;
  }
  addIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIncredients(ingredients: Ingredient[]){
    //   for (let ingredient of ingredients){
    //       this.addIngredients(ingredient);
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}