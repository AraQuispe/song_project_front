import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Song {
  id: number
  songName: string;
  artist: string;

}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API = "http://localhost:3000/api"

  public songs: Song[] = [
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

  constructor(
    private http: HttpClient
  ) { }

  public getSongs():Observable<any> {
    return this.http.get<Song[]>(this.API);
  }

  public getMessageById(id: number): Song {
    return this.songs[id-1];
  }
}
