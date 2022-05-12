
import { Component, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipes } from '../recipe.model'
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes : Recipes[] =[];

  constructor( private recipeservice : RecipeService  ) { }

  ngOnInit(): void {
    this.recipes=this.recipeservice.getRecipes();
  }
  

}
