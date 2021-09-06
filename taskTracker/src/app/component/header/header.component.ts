import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/sevices/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UIService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  get T(){return this.title;}

  toggleAddTask(){
    this.uiService.toggleAddTask();

  }

  hasRoute(route: string){
    return this.router.url == route;
  }

}
