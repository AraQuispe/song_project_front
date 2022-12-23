import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewMessagePageRoutingModule } from './create-song-routing.module';
import { CreateSongPage } from './create-song.page';

describe('ViewMessagePage', () => {
  let component: CreateSongPage;
  let fixture: ComponentFixture<CreateSongPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CreateSongPage],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
