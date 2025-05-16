import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';
import{ RecipeDetail} from './recipe-detail'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url: string = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/'

  constructor(private http : HttpClient) { }

  getRecipes(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>(this.url+'recipe.json')
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.url + '/1/recipe.json');
  }


}


