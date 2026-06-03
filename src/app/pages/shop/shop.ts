import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { ProjectsService } from '../../services/projects';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-shop',
  imports: [ProductList],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  telegram = inject(Telegram);
  projectsService = inject(ProjectsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
