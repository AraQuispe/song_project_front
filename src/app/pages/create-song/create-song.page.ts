import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.page.html',
  styleUrls: ['./create-song.page.scss'],
})
export class CreateSongPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

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
    this.ionicForm.reset()
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
      let song = new FormData()
      song.append("song_name",this.ionicForm.value["name_song"])
      song.append("artist", this.ionicForm.value["artist"])
      this.data.createSong(song).subscribe(r =>{
        this.router.navigate(["../"],{relativeTo: this.activatedRoute}).then(r=>{
          this.data.getSongs()
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

}
