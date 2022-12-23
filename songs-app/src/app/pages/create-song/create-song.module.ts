import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateSongPage } from './create-song.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './create-song-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
  declarations: [CreateSongPage]
})
export class CreateSongModule {}
