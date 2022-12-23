import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Song } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Song[] {
    return this.data.getMessages();
  }

}