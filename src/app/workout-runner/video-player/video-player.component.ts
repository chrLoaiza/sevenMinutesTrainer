import { Component, Input } from '@angular/core';
import { VideoDialogContext, VideoDialogComponent} from "./video-dialog/video-dialog.component";
import { overlayConfigFactory, Modal} from "ngx-modialog";

@Component({
  selector: 'abe-video-player',
  templateUrl: './video-player.component.html',
  styles:[]
})
export class VideoPlayerComponent {

  @Input() videos: Array<string>;

  constructor(private modal: Modal) { }

  playVideo(videoId: string) {
    this.modal.open(VideoDialogComponent,
      overlayConfigFactory(new VideoDialogContext(videoId)))
  }
}
