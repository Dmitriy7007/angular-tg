import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  telegram = inject(Telegram);

  constructor() {
    this.telegram.MainButton.show();
  }
}
