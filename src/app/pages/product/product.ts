import { Component, inject, computed, OnInit, OnDestroy } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { ProjectsService } from '../../services/projects';
import { ActivatedRoute, Router } from '@angular/router';
import { Icon } from '../../components/icon/icon';

@Component({
  selector: 'app-product',
  imports: [Icon],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit, OnDestroy {
  private telegram = inject(Telegram);
  private projectsService = inject(ProjectsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private projectId = this.route.snapshot.paramMap.get('id')!;

  readonly project = computed(() =>
    this.projectsService.getById(this.projectId)
  );

  readonly loading = this.projectsService.loading;

  constructor() {
    this.goBack = this.goBack.bind(this);
  }

  ngOnInit() {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
}
