import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {  FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;


  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit(){
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params ['id'];
          this.editMode = params ['id'] != null;
          // console.log(this.editMode);
          this.initForm();
        }
      );
  }

  onSubmit(){
    console.log(this.recipeForm);
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'], 
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagepath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,  [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
}
   onDeleteIngredient(index: number){
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
    
  private initForm(){
    let recipeName = '';
    let recipeimagepath= '';
    let recipeDescription= '';
    let recipeIngredients = new FormArray([]);

    
    if ( this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeimagepath = recipe.imagepath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']){
        for (let ingreident of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingreident.name, Validators.required),
              'amount': new FormControl(ingreident.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
   
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagepath': new FormControl(recipeimagepath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
    
  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
