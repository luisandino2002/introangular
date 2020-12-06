import { Component } from "@angular/core";
import { ALBUM_DATA } from "../../common/models/mocks/album-data.mock";
import { SongDetailComponent } from '../song-detail/song-detail.component';

@Component({
  selector: 'album-cmp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent {
  songDetail:any;
  albumModel: any = ALBUM_DATA;
  viewSongDetail(song:any): void{
    this.songDetail = song;
  }
}

