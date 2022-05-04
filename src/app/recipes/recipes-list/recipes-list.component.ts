import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipes } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[]=[
    new Recipes('A test recipe','this is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/05/aubergine-curry-d843822.jpg?quality=90&resize=900,836'),
    new Recipes('Another test recipe','this is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/05/aubergine-curry-d843822.jpg?quality=90&resize=900,836')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipes){
    this.recipeWasSelected.emit(recipe);

  }

}
