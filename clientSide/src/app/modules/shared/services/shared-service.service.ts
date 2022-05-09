import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  public searchData = new Subject<any>();
  public heading = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  sendSearchData(param: any) {
    this.searchData.next(param);
  }

  getSearchData(): Observable<any> {
    return this.searchData.asObservable();
  }

  sendHeading(param: string) {
    this.heading.next(param);
  }

  getHeading(): Observable<string> {
    return this.heading.asObservable();
  }
}
