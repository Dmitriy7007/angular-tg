import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Telegram } from './services/telegram';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class App {
  private telegram = inject(Telegram);

  constructor() {
    this.telegram.ready();
  }
}
