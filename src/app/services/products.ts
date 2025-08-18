import { Injectable } from '@angular/core';

export interface IProduct {
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
    image: '/imgs/typescript.png',
    link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fru-ru%2Fsearch%2F%25D0%25BE%25D0%25B1%25D0%25BE%25D0%25B8%2520%25D0%25BD%25D0%25B0%2520%25D1%2582%25D0%25B5%25D0%25BB%25D0%25B5%25D1%2584%25D0%25BE%25D0%25BD%2F&psig=AOvVaw0R-JhEg2WAhL_P07MUG9fk&ust=1755595049448000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjdvq6DlI8DFQAAAAAdAAAAABAE',
    time: '10 часов',
    type: 'skill',
  },
  {
    id: '2',
    title: 'Frontend Intensive',
    text: 'Интенсив по React, Angular и Vue с реальными кейсами.',
    image: '/imgs/front.png',
    link: 'https://example.com/intensives/frontend',
    time: '5 дней',
    type: 'intensive',
  },
  {
    id: '3',
    title: 'Productivity Toolkit',
    text: 'Набор инструментов и методик для продуктивной работы.',
    image: '/imgs/tools.png',
    link: 'https://example.com/tools/productivity',
    time: 'Доступ навсегда',
    type: 'other',
  },
  {
    id: '4',
    title: 'Angular Architecture',
    text: 'Как строить масштабируемые приложения на Angular.',
    image: '/imgs/angular.png',
    link: 'https://example.com/courses/angular-architecture',
    time: '8 часов',
    type: 'skill',
  },
  {
    id: '5',
    title: 'Fullstack Challenge',
    text: 'Прокачай навыки за 7 дней: backend + frontend.',
    image: '/imgs/fullstack.png',
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
