import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {ItemSongComponentModule} from "../item-song/item-song.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSongComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
