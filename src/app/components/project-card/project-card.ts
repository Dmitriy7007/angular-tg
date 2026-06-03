import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProject } from '../../services/projects';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: IProject;

  get visibleStack() {
    return this.project.stack.slice(0, 3);
  }

  get extraCount() {
    return Math.max(0, this.project.stack.length - 3);
  }

  onLinkClick(event: Event) {
    event.stopPropagation();
  }
}
