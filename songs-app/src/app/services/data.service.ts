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
      songName: 'Trakatá',
      artist: 'Ptazeta & F.'
    },
    {
      id: 2,
      songName: 'Cada que',
      artist: 'Belanova',
    },
    {
      id: 3,
      songName: 'Luna',
      artist: 'Zoé',
    }
  ];

  constructor() { }

  public getMessages(): Song[] {
    return this.messages;
  }

  public getMessageById(id: number): Song {
    return this.messages[id-1];
  }
}
