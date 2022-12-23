import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ItemSongComponent } from './item-song.component';

describe('MessageComponent', () => {
  let component: ItemSongComponent;
  let fixture: ComponentFixture<ItemSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSongComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
