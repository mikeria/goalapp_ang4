import { Injectable } from '@angular/core';
import {Goal} from '../models/Goal';

@Injectable()
export class DataService {
  goals:Goal[];
  constructor() { 
    
  }
  getGoals(){
    if(localStorage.getItem('goals') === null){
      this.goals = [];
    } else {
      this.goals = JSON.parse(localStorage.getItem('goals'));
      // reset dev code
      /* let goals = [];
      this.goals = goals;
      localStorage.setItem('goals', JSON.stringify(goals)); */
    }
    return this.goals;
  }
  
  addGoal(goal:Goal){
    this.goals.unshift(goal);
    let goals;//local var
    if(localStorage.getItem('goals') === null){
      goals = [];
      goals.unshift(goal);
      localStorage.setItem('goals', JSON.stringify(goals));
    } else {
      goals = JSON.parse(localStorage.getItem('goals'));
      goals.unshift(goal);
      localStorage.setItem('goals', JSON.stringify(goals));
    }

  }
  
  removeGoal(goal:Goal){
    for(let i = 0;i < this.goals.length;i++){
      if(goal == this.goals[i]){
        this.goals.splice(i, 1);
        localStorage.setItem('goals', JSON.stringify(this.goals));
      }
    }
  }
  

}
