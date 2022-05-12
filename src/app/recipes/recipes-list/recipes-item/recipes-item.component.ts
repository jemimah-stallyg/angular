
import { Component, OnInit, Input} from '@angular/core';
// import { EventEmitter } from 'stream';
// import { Recipes } from '../../recipe.model';
import { Recipes } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
  
 
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe !: Recipes;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {  
    
    
  }

  ngOnInit(): void {

  }
  onSelected(){
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
    
  }

}
