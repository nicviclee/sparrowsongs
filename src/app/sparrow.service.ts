import { Injectable } from '@angular/core';
import { Sparrow } from './sparrow';
import { MOCKSPARROWS } from './mock-sparrows';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map';

@Injectable()
export class SparrowService {
    apiUrl: string = 'https://www.xeno-canto.org/api/2/recordings?query=sparrow+q%3Aa+type%3Asong+cnt%3Acanada';
    results: Sparrow[];
    loading: boolean;

  constructor(private http: Http) {
      //this.results = [];
      //this.loading = false;
  }

  // getAudioFile(private downloadLink: string): Observable<string> {
  //     var response = this.http.get(downloadLink);
  //     return response
  //       .map(res => {
  //               console.log(res.json());
  //
  //               return res.json().map(item => {
  //                   return new Sparrow(
  //                       item.en,
  //                       item.gen,
  //                       item.sp,
  //                       'https:' + item.file,
  //                       'assets/generic-sparrow.png'
  //                   )});
  //           },
  //           msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
  //       );
  // }

  getAudioRedirect(downloadLink: string): Observable<string> {
      var response = this.http.get(downloadLink);
      return response
        .map(res => {
                //return decodeURI(res.url);
                return res.url;
            },
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
  }

  getSparrows() : Observable<Sparrow[]> {
      //return of(MOCKSPARROWS);
      console.log(this.apiUrl);
      var response = this.http.get(this.apiUrl);

      return response
        .map(res => {
                //console.log(res.json().recordings);

                var mapped = res.json().recordings.map(item => {
                    let audioRedirect = this.getAudioRedirect('https:' + item.file);

                    return new Sparrow(
                        item.en,
                        item.gen,
                        item.sp,
                        item.file,
                        '',
                        'assets/generic-sparrow.png'
                    )});

                let uniqueSparrows = [];
                return mapped.filter(item => {
                    if (uniqueSparrows.indexOf(item.name) == -1){
                        uniqueSparrows.push(item.name);
                        return item;
                    }
                });
            },
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
  }
}
