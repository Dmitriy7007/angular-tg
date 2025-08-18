import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { IProduct, Products } from '../../services/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit, OnDestroy {
  product: IProduct;
  telegram = inject(Telegram);
  products = inject(Products);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id!) as IProduct;
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    // this.telegram.BackButton.hide();
    this.telegram.BackButton.offClick(this.goBack);
  }
}
