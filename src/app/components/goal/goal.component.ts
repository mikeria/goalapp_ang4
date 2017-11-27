import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Goal } from '../../models/Goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input('goal') goal:Goal;
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
  removeGoal(goal){
    this.dataService.removeGoal(goal);
  }
}
