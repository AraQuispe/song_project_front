import { Component, Input } from '@angular/core';
import {DataService, Song} from '../../services/data.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-song',
  templateUrl: './item-song.component.html',
  styleUrls: ['./item-song.component.scss'],
})
export class ItemSongComponent {
  @Input() song?: Song;
  subscription!: Subscription

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  constructor(
    private data: DataService
  ) {
  }
  deleteSong( id:String){
    this.subscription = this.data.deleteSong(id).subscribe()
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
