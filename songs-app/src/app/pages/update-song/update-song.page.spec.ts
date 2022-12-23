import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewMessagePageRoutingModule } from './update-song-routing.module';
import { UpdateSongPage } from './update-song.page';

describe('ViewMessagePage', () => {
  let component: UpdateSongPage;
  let fixture: ComponentFixture<UpdateSongPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UpdateSongPage],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
