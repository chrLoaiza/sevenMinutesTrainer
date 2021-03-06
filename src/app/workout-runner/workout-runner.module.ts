import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SecondsToTimePipe } from './shared/seconds-to-time.pipe';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WorkoutRunnerComponent
  ],
  declarations: [
    WorkoutRunnerComponent,
    ExerciseDescriptionComponent,
    VideoPlayerComponent,
    SecondsToTimePipe,
    VideoDialogComponent,
    WorkoutAudioComponent],
    entryComponents:[VideoDialogComponent]
})
export class WorkoutRunnerModule { }
