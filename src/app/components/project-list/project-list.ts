import { Component, Input } from '@angular/core';
import { IProject } from '../../services/projects';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() projects: IProject[] = [];
}
