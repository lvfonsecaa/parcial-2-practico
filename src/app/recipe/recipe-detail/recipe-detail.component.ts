import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  @Input() recipe!: Recipe ;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) {}

  getRecipe(){
    this.recipeService.getRecipe(this.recipeId).subscribe(data => {
      this.recipe = data;
    })
  }
  ngOnInit(): void {
    if(this.recipe === undefined){
      this.recipeId = this.route.snapshot.paramMap.get('id')!
      if(this.recipeId ){
        this.getRecipe();
      }
    }
  }
}
