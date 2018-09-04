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
        // .subscribe(data =>
        //     console.log(data);
        //     this.sparrows = data;
        //
            // for (var i = 0; i < this.sparrows.length(); i++){
            //     this.sparrows[i].audioRedirect = getAudioRedirect(this.sparrows[i]);
            // }
        // );
        // this.sparrowService.getAudioFile('https://www.xeno-canto.org/194110/download')
        // .subscribe(data => console.log(data));
  }

  getAudioRedirect(sparrow: Sparrow) : Observable<string> {
      return this.sparrowService.getAudioRedirect(sparrow.audioFile);
      // foreach(var sparrow in sparrows){
      //     sparrow.audioRedirect = this.sparrowService.getAudioFile('https://www.xeno-canto.org/194110/download')
      //     .subscribe(data => console.log(data));
      // }
  }

  onSelect(sparrow: Sparrow): void {
  	this.selectedSparrow = sparrow;
  }

  onMouseover(sparrow: Sparrow): void {
  	this.highlightedSparrow = sparrow;
    //var audio = document.getElementById(sparrow.name);
    //audio.src = sparrow.audioRedirect;
    //audio.play();
  }

  onMouseLeave(sparrow: Sparrow): void {
  	this.highlightedSparrow = null;
    // var audio = document.getElementById(sparrow.name);
    // audio.pause();
  }
}
