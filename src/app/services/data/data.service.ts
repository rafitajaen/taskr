import { Injectable } from '@angular/core';
import { AppState } from 'src/app/interfaces/app-state';
import { Project } from 'src/app/interfaces/project';
import * as dummyJson from './dummy-data.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  state = (dummyJson as unknown as AppState)

  constructor() {

  }

  getUserName(): string {
    return this.state.username;
  }
  getAllProjects(): Project[] {
    return this.state.projects;
  }


}
