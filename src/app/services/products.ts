import { Injectable } from '@angular/core';

interface IProduct {
  id: string;
  text: string;
  image: string;
  title: string;
  link: string;
  time: string;
  type: 'skill' | 'intensive' | 'other';
}

const products: IProduct[] = [
  {
    id: '1',
    title: 'TypeScript Pro',
    text: 'Углублённый курс по TypeScript с практикой и проектами.',
    image: 'https://example.com/images/ts-pro.jpg',
    link: 'https://example.com/courses/typescript-pro',
    time: '10 часов',
    type: 'skill',
  },
  {
    id: '2',
    title: 'Frontend Intensive',
    text: 'Интенсив по React, Angular и Vue с реальными кейсами.',
    image: 'https://example.com/images/frontend-intensive.jpg',
    link: 'https://example.com/intensives/frontend',
    time: '5 дней',
    type: 'intensive',
  },
  {
    id: '3',
    title: 'Productivity Toolkit',
    text: 'Набор инструментов и методик для продуктивной работы.',
    image: 'https://example.com/images/productivity.jpg',
    link: 'https://example.com/tools/productivity',
    time: 'Доступ навсегда',
    type: 'other',
  },
  {
    id: '4',
    title: 'Angular Architecture',
    text: 'Как строить масштабируемые приложения на Angular.',
    image: 'https://example.com/images/angular-arch.jpg',
    link: 'https://example.com/courses/angular-architecture',
    time: '8 часов',
    type: 'skill',
  },
  {
    id: '5',
    title: 'Fullstack Challenge',
    text: 'Прокачай навыки за 7 дней: backend + frontend.',
    image: 'https://example.com/images/fullstack-challenge.jpg',
    link: 'https://example.com/challenges/fullstack',
    time: '7 дней',
    type: 'intensive',
  },
];

@Injectable({
  providedIn: 'root',
})
export class Products {
  readonly products: IProduct[] = products;

  getById(id: string) {
    return this.products.find((product) => product.id === id);
  }

  get byGroup() {
    return this.products.reduce((acc, product) => {
      if (!acc[product.type]) {
        acc[product.type] = [];
      }
      acc[product.type].push(product);
      return acc;
    }, {} as Record<IProduct['type'], IProduct[]>);
  }
}
