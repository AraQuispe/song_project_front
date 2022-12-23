import { Component, Input } from '@angular/core';
import {DataService, Song} from '../../services/data.service';

@Component({
  selector: 'app-item-song',
  templateUrl: './item-song.component.html',
  styleUrls: ['./item-song.component.scss'],
})
export class ItemSongComponent {
  @Input() song?: Song;

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  constructor(
    private data: DataService
  ) {
  }
  deleteSong( id:String){
    this.data.deleteSong(id).subscribe(r=>{
      this.data.getSongs()
    })
  }

}
