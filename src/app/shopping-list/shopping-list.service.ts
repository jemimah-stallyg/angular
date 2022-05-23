
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  [x: string]: any;
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] =[
        new Ingredient('apples', 5),
        new Ingredient('Tomatoes', 10) 
  ];

  getIngrdients(){
      return this.ingredients.slice() ;
  }

  getIngredient(index: number){
    return this. ingredients[index];
  }
  addIngredients(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIncredients(ingredients: Ingredient[]){
    //   for (let ingredient of ingredients){
    //       this.addIngredients(ingredient);
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index]= newIngredient;
    this.ingredientsChanged.next( this.ingredients.slice());
  }
}