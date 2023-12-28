import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit{
  food!: Foods;

  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = this.foodService.getFoodById(params['id'])
      })
    }

  ngOnInit(): void {
    
  }

}
