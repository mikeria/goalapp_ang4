import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../../models/Goal';
import {Task} from '../../models/Task';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  @Output() goalAdded = new EventEmitter<Goal>();

   name:string;
   description:string;
   imageUrl:string = "";
   task:Task = {name:"", done:false};
   tasks:Task[] = [this.task];
   

  constructor() { }

  ngOnInit() {
  }

  addGoal(){
    this.goalAdded.emit({name:this.name, description:this.description, imageUrl:this.imageUrl, hide:true, tasks:this.tasks, reached:false, priority:5, archived:false});
  }
}
