import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Song } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listSongs:Song[] = []

  ngOnInit() {
    this.getSongs()
  }

  constructor(private data: DataService) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 2000);
    this.getSongs()
  }

  getSongs(): any {
    this.data.getSongs().subscribe(r=>{
      this.listSongs = r
    })
    return this.listSongs;
  }

  deleteSong() {

  }
}
