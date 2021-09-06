import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/sevices/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  // Outputs data right when the component is called.
  ngOnInit(): void {
    this.taskService.Task.subscribe((tasks) => (this.tasks = tasks));
  }

  //Will delete an item from the server and remove it from the UI.
  deleteTask(task: Task)
  {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks?.filter(t => t.id !== task.id)));
  }

  //Will update data from the server and on the UI.
  ToggleReminder(task: Task)
  {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  //Will add data from the server and on the UI.
  addTask(task: Task)
  {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }


}
