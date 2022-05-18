
import { Component, OnInit, Input} from '@angular/core';
// import { EventEmitter } from 'stream';
// import { Recipes } from '../../recipe.model';
import { Recipes } from '../../recipe.model';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
  
 
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe !: Recipes;
  @Input() index!: number;
  // @Output() recipeSelected = new EventEmitter<void>();

 
    
    
  

  ngOnInit(){

  }
 
}

