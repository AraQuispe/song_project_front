import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService, Song} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.page.html',
  styleUrls: ['./update-song.page.scss'],
})
export class UpdateSongPage implements OnInit, OnDestroy {
  subscriptionGet!: Subscription
  subscriptionPut!: Subscription

  ionicForm: FormGroup;
  isSubmitted = false;
  idSong = ''

  constructor(
    public formBuilder: FormBuilder,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) {
    this.ionicForm = this.formBuilder.group({
      name_song: ['', [Validators.required]],
      artist: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.idSong = this.activatedRoute.snapshot.paramMap.get('id') as string
    this.subscriptionGet = this.data.getSongById(this.idSong).subscribe(r => {
      this.ionicForm.controls['name_song'].setValue(r.song_name);
      this.ionicForm.controls['artist'].setValue(r.artist);
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let songEdit: Song = {} as Song
      songEdit._id = this.idSong
      songEdit.song_name = this.ionicForm.value["name_song"]
      songEdit.artist = this.ionicForm.value["artist"]
      this.subscriptionPut = this.data.updateSong(songEdit).subscribe(r =>{
        this.router.navigate(["../../"], {relativeTo: this.activatedRoute}).then(r=>{
          window.location.reload();
        })
      });
      return
    }
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  ngOnDestroy() {
    if (this.subscriptionGet != undefined)
    this.subscriptionGet.unsubscribe()
    if (this.subscriptionPut != undefined)
    this.subscriptionPut.unsubscribe()
  }
}
