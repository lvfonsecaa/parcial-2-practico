import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeRoutingModule } from './recipe/recipe-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeModule, RecipeRoutingModule, HttpClientModule],
  providers: [RecipeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
