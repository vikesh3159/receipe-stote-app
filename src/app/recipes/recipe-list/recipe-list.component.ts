import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [NgFor, RecipeItemComponent],
})
export class RecipeListComponent {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipes = this.recipeService.recipes;

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
