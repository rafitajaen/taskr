import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {

  @Input() projects: Project[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
