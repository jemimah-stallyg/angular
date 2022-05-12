import { Component, OnInit } from '@angular/core';

import { Recipes } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe !: Recipes;

  constructor(private recipeService: RecipeService) { 
   
  }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe:Recipes) =>{
         this.selectedRecipe = recipe;
      }
    )
  }

}
