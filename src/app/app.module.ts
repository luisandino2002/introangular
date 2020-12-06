import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumComponent } from './features/album/album.component';
import { SongDetailComponent } from './features/song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent, AlbumComponent, SongDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
