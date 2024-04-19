import {Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test', 'https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-instagram-post-template_106176-3784.jpg?w=740&t=st=1712373044~exp=1712373644~hmac=93c213b81ff48649d3a777209afa27a32720b21cff656e5cdd020fcad69c87e3',[
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another test Recipe', 'This is simply a test', 'https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-instagram-post-template_106176-3784.jpg?w=740&t=st=1712373044~exp=1712373644~hmac=93c213b81ff48649d3a777209afa27a32720b21cff656e5cdd020fcad69c87e3',[
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
       ];

       constructor(private slService: ShoppingListService){}

       getRecipes() {
        return this.recipes.slice();
       }

       getRecipe(index: number){
        return this.recipes[index];
       }

       addIngredientsToShoppingList(ingredients: Ingredient[]){
               this.slService.addIngredients(ingredients);
       }
}