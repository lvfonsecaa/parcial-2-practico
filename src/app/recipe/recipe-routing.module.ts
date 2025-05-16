import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [

  {
    path: '../recipe:id',
    component: RecipeDetailComponent
  },
  {
    path: '../recipe',
    component: RecipeListComponent
  },

];


@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class RecipeRoutingModule { }