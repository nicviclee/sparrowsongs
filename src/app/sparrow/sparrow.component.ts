import { Component, OnInit } from '@angular/core';
import { Sparrow } from '../sparrow';
//import { MOCKSPARROWS } from '../mock-sparrows';
import { SparrowService } from '../sparrow.service';
import { Observable } from 'rxjs/Observable';

import { tap, map } from 'rxjs/operators';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/publishReplay';

@Component({
  selector: 'app-sparrow',
  templateUrl: './sparrow.component.html',
  styleUrls: ['./sparrow.component.css'],
})
export class SparrowComponent implements OnInit {
  sparrows: Observable<Sparrow[]>;
  //sparrows: Sparrow[];

  selectedSparrow: Sparrow;
  highlightedSparrow: Sparrow;

  constructor(private sparrowService: SparrowService) { }

  ngOnInit() {
      this.getSparrows();
      //this.getAudioRedirect();
  }

  getSparrows() : void {
      this.sparrows = this.sparrowService.getSparrows();
  }

  getAudioRedirect(sparrow: Sparrow) : Observable<string> {
      return this.sparrowService.getAudioRedirect(sparrow.audioFile);
  }

  onSelect(sparrow: Sparrow): void {
  	this.selectedSparrow = sparrow;

    var audio = document.getElementById(sparrow.name);
    audio.load();
    console.log(audio);
  }

  onMouseover(sparrow: Sparrow): void {
  	this.highlightedSparrow = sparrow;

    var audio = document.getElementById(sparrow.name);
    var source = document.getElementById(sparrow.name + '-audio');

    if (!sparrow.hasBeenHeard && source.src != ''){
        audio.load();
        sparrow.hasBeenHeard = true;
    }

    if (source.src != ''){
        audio.play();
    }
  }

  onMouseLeave(sparrow: Sparrow): void {
  	this.highlightedSparrow = null;

    var audio = document.getElementById(sparrow.name);
    var source = document.getElementById(sparrow.name + '-audio');
    if (source.src != ''){
        audio.pause();
    }
  }
}
