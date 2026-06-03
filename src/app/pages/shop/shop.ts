import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { ProjectsService } from '../../services/projects';
import { ProjectList } from '../../components/project-list/project-list';

@Component({
  selector: 'app-shop',
  imports: [ProjectList],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  private telegram = inject(Telegram);
  projectsService = inject(ProjectsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
