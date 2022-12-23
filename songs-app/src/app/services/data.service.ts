import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from "../../environments/environment";

export interface Song {
  _id: string;
  song_name: string;
  artist: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlApi = environment.url
  listSongs = new Subject<Song[]>()

  constructor(
    private http: HttpClient
  ) { }

  public getSongs() {
     this.http.get<Song[]>(this.urlApi).subscribe(response=>{
       this.listSongs.next(response)
     })
  }

  public getSongById(id: string): Observable<Song> {
    return this.http.get<Song>(this.urlApi+"/get-song/"+id);
  }
  public createSong(song: FormData): Observable<any>{
    return this.http.post<Song>(this.urlApi+"/create-song",
      {
        song_name: song.get("song_name"),
        artist: song.get("artist")
        }
      )
  }

  public deleteSong(id: String): Observable<any> {
    return this.http.delete<any>(this.urlApi+"/delete-song/"+id);
  }

  public updateSong(song: Song):Observable<Song> {
    return this.http.put<any>(this.urlApi+"/update-song/"+song._id,
      {
        song_name: song.song_name,
        artist: song.artist
        }
      );
  }
}
