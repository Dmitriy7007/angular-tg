import { Component, Input } from '@angular/core';
import { IProject } from '../../services/projects';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-product-list',
  imports: [ProjectCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() projects: IProject[] = [];
}
