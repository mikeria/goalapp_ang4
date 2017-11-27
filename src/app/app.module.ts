import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { GoalComponent } from './components/goal/goal.component';
import { AddGoalComponent } from './components/add-goal/add-goal.component';
import {GoallistComponent} from './components/goallist/goallist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GoalComponent,
    AddGoalComponent,
    GoallistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
