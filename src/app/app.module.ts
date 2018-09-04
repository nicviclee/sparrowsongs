import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SparrowComponent } from './sparrow/sparrow.component';


@NgModule({
  declarations: [
    AppComponent,
    SparrowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,//configures injector with all modules needed for Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
