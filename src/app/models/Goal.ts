import {Task} from './Task';
export interface Goal {
    name:string;
    description:string;
    imageUrl:string;
    hide:boolean;
    tasks:Task[];
    reached:boolean;
    priority:number;
    archived:boolean;
}