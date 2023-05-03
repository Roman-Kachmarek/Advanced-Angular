import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @Input()
  set newTask(task: string) {
    if (task) {
      this.taskArr.push({ name: task, check: false });
    }
  }
  @Output() childTask = new EventEmitter<number>();
  @Output() countLength = new EventEmitter<number>();

  public taskArr: Array<{
    name: string;
    check: boolean;
  }> = [
    { name: 'HTML5', check: true },
    { name: 'CSS3', check: true },
    { name: 'SCSS', check: false },
    { name: 'JavaScript', check: false },
    { name: 'jQuery', check: false },
    { name: 'Angular', check: false },
  ];
  public editButton = 'edit-btn';
  public deleteButton = 'delete-btn';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.counted();
  }

  deleteLine(index: number): void {
    this.taskArr.splice(index, 1);
  }

  checker(index: number): void {
    this.taskArr[index].check = !this.taskArr[index].check;
  }

  editUser(index: number): void {
    this.childTask.emit(index);
  }
  
  counted(): void {
    this.countLength.emit(this.taskArr.length);
  }
}
