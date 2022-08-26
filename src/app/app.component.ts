import { Component } from '@angular/core';
import { AppState } from './interfaces/app-state';
import { Project } from './interfaces/project';
import { DataService } from './services/data/data.service';
import { LocalService } from './services/local/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskr';
  projects: Project[] = [];

  constructor(private localStore: LocalService, private state: DataService) {
    this.projects = state.getAllProjects();
  }

}
