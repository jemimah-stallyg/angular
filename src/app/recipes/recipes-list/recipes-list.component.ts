
import { Component, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipes } from '../recipe.model'
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes : Recipes[] =[];

  constructor( private recipeservice : RecipeService,
              private router: Router,
              private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.recipes=this.recipeservice.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});

  }
  

}
