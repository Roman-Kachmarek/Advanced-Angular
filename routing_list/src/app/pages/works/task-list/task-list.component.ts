import { Component , OnInit, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit  {
  @ViewChild(ChildComponent) childTable!: ChildComponent;
  public count!: number;
  public annoncement = 'head';
  public firstSection = 'first-block';
  public addSection = 'add-input';
  public btnAdd = 'add-button';
  public secondSection = 'second-block';
  public pushTask!: string;
  public addtask!: string;
  public save = false;
  public index!: number;
  public getTask!: string;

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    this.addtask = this.pushTask;
    this.pushTask = '';
  }
  getName(index: number): void {
    this.save = true;
    this.getTask = this.childTable.taskArr[index].name;
    this.index = index;
  }
  rename(): void {
    this.childTable.taskArr[this.index].name = this.getTask;
    this.getTask = '';
    this.save = false;
  }
  takeLenght(length: number): void {
    this.count = length;
  }
}


