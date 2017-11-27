import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Goal } from '../../models/Goal';

@Component({
  selector: 'app-goallist',
  templateUrl: './goallist.component.html',
  styleUrls: ['./goallist.component.css']
})
export class GoallistComponent implements OnInit {
  goals:Goal[];

  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.goals = this.dataService.getGoals();
  }
  addGoal(goal:Goal){
    this.dataService.addGoal(goal);
  }

}
