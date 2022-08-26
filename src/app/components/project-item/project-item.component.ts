import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() projects: Project[] = [];
  @Input() item: Project = { title: "New Project", description: "New Project Description", tasks: [] };
  @Input() index: number = 0;
  @Input() maxItems: number = 6;
  @Input() length: number = 0;

  limit: number = 5;

  last: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
