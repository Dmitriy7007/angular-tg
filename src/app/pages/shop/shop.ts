import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { Products } from '../../services/products';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-shop',
  imports: [ProductList],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  telegram = inject(Telegram);
  products = inject(Products);
  user: string;

  constructor() {
    // this.telegram.MainButton.show();
    this.telegram.BackButton.hide();
    this.user = this.telegram.User || 'shop';

    // console.log(this.products.byGroup);
    // console.log(this.telegram.User);
  }
}
