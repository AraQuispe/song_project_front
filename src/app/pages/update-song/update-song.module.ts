import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateSongPage } from './update-song.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './update-song-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewMessagePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [UpdateSongPage]
})
export class UpdateSongModule {}
