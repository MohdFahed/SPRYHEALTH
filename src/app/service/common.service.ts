import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  commonData = new BehaviorSubject(['Manager', 'Developer', 'Designer', 'HR']);
  clientData = new BehaviorSubject([
    { themeId: 'themeA', clientName: 'Client A' },
    { themeId: 'themeB', clientName: 'Client B' },
    { themeId: 'themeC', clientName: 'Client C' },
  ]);

  getDynamicTheme(themeName: any) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${themeName}.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = `assets/themes/${themeName}.css`;
      head.appendChild(style);
    }
  }
}
