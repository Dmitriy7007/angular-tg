import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() products: IProduct[] = [];
}
