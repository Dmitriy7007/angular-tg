import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { IProject, ProjectsService } from '../../services/projects';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit, OnDestroy {
  project: IProject | undefined;
  projectId: string;
  telegram = inject(Telegram);
  projectsService = inject(ProjectsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
    this.goBack = this.goBack.bind(this);
  }

  ngOnInit() {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);

    // Try to get project immediately (might be cached)
    this.project = this.projectsService.getById(this.projectId);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
