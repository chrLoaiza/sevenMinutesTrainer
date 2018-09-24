import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAudioDirective } from "../../shared/my-audio.directive";
import { ExerciseDescriptionComponent } from '../exercise-description/exercise-description.component';
import { ExerciseProgressEvent, ExerciseChangedEvent } from '../model';

@Component({
  selector: 'abe-workout-audio',
  templateUrl: './workout-audio.component.html',
  styles: []
})
export class WorkoutAudioComponent implements OnInit {
  @ViewChild('ticks') private ticks: MyAudioDirective;
  @ViewChild('nextUp') private nextUp: MyAudioDirective;
  @ViewChild('nextUpExercise') private nextUpExercise: MyAudioDirective;
  @ViewChild('halfWay') private halfWay: MyAudioDirective;
  @ViewChild('aboutToComplete') private aboutToComplete: MyAudioDirective;
  private nextupSound: string;

  constructor() { }

  stop() {
    this.ticks.stop();
    this.nextUp.stop();
    this.halfWay.stop();
    this.aboutToComplete.stop();
    this.nextUpExercise.stop();
  }

  resume() {
    this.ticks.start();
    if (this.nextUp.currentTime > 0 && !this.nextUp.playbackComplete) {
      this.nextUp.start();
    }
    else if (this.nextUpExercise.currentTime > 0 && !this.nextUpExercise.playbackComplete) {
      this.nextUpExercise.start();
    }
    else if (this.halfWay.currentTime > 0 && !this.halfWay.currentTime) {
      this.halfWay.start();
    }
    else if (this.aboutToComplete.currentTime > 0 && !this.aboutToComplete.currentTime) {
      this, this.aboutToComplete.start();
    }
  }

  onExerciseProgress(progress: ExerciseProgressEvent) {
    if (progress.runningFor === Math.floor(progress.exercise.duration / 2)
      && progress.exercise.exercise.name != 'rest') {
      this.halfWay.start();
    }
    else if (progress.timeRemaining === 3) {
      this.aboutToComplete.start();
    }
  }

  onExerciseChange(state: ExerciseChangedEvent) {
    if (state.current.exercise.name === 'rest'){
      this.nextupSound = state.next.exercise.nameSound;
      setTimeout(()=> this.nextUp.start(), 2000);
      setTimeout(()=> this.nextUpExercise.start(), 3000);
    }
  }

  ngOnInit() {
  }

}
