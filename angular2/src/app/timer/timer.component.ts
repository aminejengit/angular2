import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
	static play = "I>"
	static pause = "II"

	minutes : number;
	seconds : number;
	isPaused : boolean;
	buttonLabel : string;

  constructor() {
    this.buttonLabel=TimerComponent.pause;
  	this.isPaused = false;
  	this.reset();
  	setInterval(() => this.tick(), 50);
  }

  togglePause(){
  	this.isPaused=!this.isPaused;
  	this.isPaused?this.buttonLabel=TimerComponent.play : this.buttonLabel=TimerComponent.pause;
  }

  reset() {
  this.minutes = 1;
  this.seconds = 59;
  }

  private tick() {
  if (!this.isPaused){
  if(--this.seconds < 0) {
    this.seconds = 59;
    if(--this.minutes < 0) {
      this.reset();
    }
  }
  }
  }

  ngOnInit() {
  }

}
