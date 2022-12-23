import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSongPage } from './create-song.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './create-song-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewMessagePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CreateSongPage]
})
export class CreateSongModule {}
