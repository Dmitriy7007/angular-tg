import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { Products } from '../../services/products';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  telegram = inject(Telegram);
  products = inject(Products);
  user: string;

  constructor() {
    this.telegram.MainButton.show();
    this.user = this.telegram.User || 'shop';

    console.log(this.products.byGroup);
    console.log(this.telegram.User);
  }
}
