
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes!: Recipes[];
  subscription!: Subscription;

  constructor( private recipeservice : RecipeService,
              private router: Router,
              private route: ActivatedRoute  ) { 
  }

  ngOnInit(): void {
    this.subscription = this.recipeservice.recipesChanged
    .subscribe(
      (recipes: Recipes[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeservice.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo: this.route});

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
}
