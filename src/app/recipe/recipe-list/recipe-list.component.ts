import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Cake', 'Sponge cake', 'https://images.immediate.co.uk/volatile/sites/2/2015/05/6522.jpg?quality=90&resize=768,574'),
    new Recipe('Cookies', 'Sweet cookie', 'https://kitchenfunwithmy3sons.com/wp-content/uploads/2016/12/The-Best-Christmas-Cookie-Recipes-21-680x680.jpg'),
    new Recipe('Pie', 'Strawberry Pie', 'https://mymontanakitchen.com/wp-content/uploads/2017/07/IMG_2596.jpg'),
    new Recipe('Chips', 'Potato chips', 'https://sparkpeo.hs.llnwd.net/e2/guid/Spicy-Sweet-Potato-Chips/3dc6158f-d6f2-42be-bc97-22b1945d6275.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
