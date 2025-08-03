import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

interface TgButton {
  show: () => void;
  onClick: () => void;
  setText: (text: string) => void;
}

@Injectable({
  providedIn: 'root',
})
export class Telegram {
  private readonly _document = inject(DOCUMENT);
  private readonly window = this._document.defaultView!;
  tg = (this.window as any).Telegram.WebApp;

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }
}
