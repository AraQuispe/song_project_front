import { Component, Input } from '@angular/core';
import { Song } from '../../services/data.service';

@Component({
  selector: 'app-item-song',
  templateUrl: './item-song.component.html',
  styleUrls: ['./item-song.component.scss'],
})
export class ItemSongComponent {
  @Input() message?: Song;

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
