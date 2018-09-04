import { Component, OnInit } from '@angular/core';
import { SparrowService } from './sparrow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SparrowService]
})
export class AppComponent implements OnInit{
  title = 'sparrow songs';

  constructor() { }

  ngOnInit() {
  }

  play(): void {
  }
}
