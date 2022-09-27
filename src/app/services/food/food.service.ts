import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from '../../shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }




getFoodById(id:number): Foods{
  return this.getAll().find(food => food.id == id)!;
}





  getAllFoodByTag(tag:string) :Foods[]{
if(tag== 'All')
return this.getAll();
else
return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      { name: 'All', count: 12 },
      { name: 'FastFood', count: 6 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 4 },
      { name: 'cold liquid', count: 2 },
      { name: 'burger', count: 2 },
      { name: 'maggi', count: 1 }

      
    ];
    
  }
  getAll(): Foods[] {

    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 180,
        favorite: true,
        origins: ['italy','china'],
        imageUrl: '/assets/pizza.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 2,
        name: 'Burger',
        cookTime: '5-10',
        price: 60,
        favorite: true,
        origins: ['china'],
        imageUrl: '/assets/burger.jpg',
        tags: ['FastFood','burger'],
      },
      {
        id: 3,
        name: 'Momoz',
        cookTime: '10-15',
        price: 50,
        favorite: false,
        origins: ['china'],
        imageUrl: '/assets/momoz.jpg',
        tags: ['FastFood'],
      },
      {
        id: 4,
        name: 'Chowmine,',
        cookTime: '10-20',
        price: 40,
        favorite: true,
        origins: ['china'],
        imageUrl: '/assets/chowmie.jpg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Colddrink',
        cookTime: '2',
        price: 45,
        favorite: false,
        origins: ['indian'],
        imageUrl: '/assets/colddrink.jpg',
        tags: ['cold liquid' ],
      },
      {
        id: 6,
        name: 'Pepsi',
        cookTime: '10-20',
        price: 50,
        favorite: true,
        origins: ['indian'],
        imageUrl: '/assets/pepsi.jpg',
        tags: ['cold liquid'  ],
      },
      {
        id: 7,
        name: 'Rice',
        cookTime: '10-20',
        price: 70,
        favorite: true,
        origins: ['italy','indian'],
        imageUrl: '/assets/rice.jpg',
        tags: [  'Lunch'],
      },
      {
        id: 8,
        name: 'Paneer',
        cookTime: '25-30',
        price: 200,
        favorite: true,
        origins: ['italy','indian'],
        imageUrl: '/assets/paneer.jpg',
        tags: [  'Lunch'],
      },
      {
        id: 9,
        name: 'tandoori',
        cookTime: '5-10',
        price: 8,
        favorite: true,
        origins: ['italy'],
        imageUrl: '/assets/tandoori.jpg',
        tags: [  'Lunch'],
      },
      {
        id: 10,
        name: 'Biryani',
        cookTime: '15-20',
        price: 75,
        favorite: true,
        origins: ['indian'],
        imageUrl: '/assets/biryani.jpg',
        tags: [ 'Lunch'],
      }
      ,
      {
        id: 11,
        name: 'Maggi',
        cookTime: '10-20',
        price: 30,
        favorite: true,
        origins: ['china','india'],
        imageUrl: '/assets/maggi.jpg',
        tags: [ 'FastFood','maggi'],
      },
      {
        id: 12,
        name: 'CheesBurger',
        cookTime: '10-20',
        price: 80,
        favorite: true,
        origins: ['italy','indian'],
        imageUrl: '/assets/cheesburger (1).jpg',
        tags: [ 'FastFood','burger'],
      }






    ];
  }
}






