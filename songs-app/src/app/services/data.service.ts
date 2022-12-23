import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
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
  constructor(
    private http: HttpClient
  ) { }

  public getSongs():Observable<any> {
    return this.http.get<Song[]>(this.urlApi);
  }

  public getSongById(id: string): Observable<Song> {
  return this.http.get<Song>(this.urlApi+"/get-song/"+id);

  }


}
