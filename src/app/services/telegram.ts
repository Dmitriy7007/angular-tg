import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Telegram {
  private readonly _document = inject(DOCUMENT);
  private readonly window = this._document.defaultView as Window;

  tg = this.window.Telegram.WebApp;

  get MainButton() {
    return this.tg.MainButton;
  }

  get BackButton() {
    return this.tg.BackButton;
  }

  get User() {
    return this.tg.initDataUnsafe?.user?.first_name;
  }

  ready() {
    this.tg.ready();
  }
}
