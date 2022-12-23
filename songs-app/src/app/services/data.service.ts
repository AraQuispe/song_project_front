import { Injectable } from '@angular/core';

export interface Song {
  id: number
  songName: string;
  artist: string

}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Song[] = [
    {
      id: 1,
      songName: 'Matt Chorsey',
      artist: 'New event: Trip to Vegas'
    },
    {
      id: 2,
      songName: 'Lauren Ruthford',
      artist: 'Long time no chat',
    }
  ];

  constructor() { }

  public getMessages(): Song[] {
    return this.messages;
  }

  public getMessageById(id: number): Song {
    return this.messages[id];
  }
}
