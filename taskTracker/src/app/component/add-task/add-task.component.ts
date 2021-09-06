import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UIService } from 'src/app/sevices/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UIService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))

  }

  ngOnInit(): void {
  }

  onSubmit(){

    //validation for text
    if(!this.text){
      alert('Please add a task! ');
      return;
    }

    // Object that contains the properties data
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    // Clears the text-boxes when form is submitted. 
    this.text = '';
    this.day ='';
    this.reminder =  false;
  }

}
