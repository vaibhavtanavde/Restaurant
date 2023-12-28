import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id==id)!;

  }



  getAllFoodByTag(tag: string): Foods[]{
    return tag == "All" ?
      this.getAll(): this.getAll().filter(food => food.tags?.
      includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name: 'All', count: 5},
      { name: 'Breakfast', count: 1},
      { name: 'Lunch', count: 1},
      { name: 'Dinner', count: 3},
    ];
  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Fruit Plate',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins: ['India'],
        star: 4.5,
        imageURL: '/assets/food-1.jpg',
        tags: ['Breakfast', 'Fruits'],
      },
      {
        id:2,
        name:'Vegetable Soup',
        cookTime:'20-30',
        price:20,
        favorite:false,
        origins: ['Vietnam'],
        star: 5.5,
        imageURL: '/assets/food-2.jpg',
        tags: ['Lunch', 'Vegetable Soup'],
      },
      {
        id:3,
        name:'Steak',
        cookTime:'30-40',
        price:50,
        favorite:false,
        origins: ['America'],
        star: 7.0,
        imageURL: '/assets/food-5.jpg',
        tags: ['Dinner', 'Steak'],
      },
      {
        id:4,
        name:'Pasta',
        cookTime:'30-40',
        price:40,
        favorite:false,
        origins: ['Italy'],
        star: 7.5,
        imageURL: '/assets/food-6.jpg',
        tags: ['Dinner', 'Pasta'],
      },
      {
        id:5,
        name:'Thali',
        cookTime:'40-50',
        price:25,
        favorite:false,
        origins: ['India'],
        star: 8.0,
        imageURL: '/assets/food-7.jpg',
        tags: ['Dinner', 'Thali'],
      },
    ];
  }
}
