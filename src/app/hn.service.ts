import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewsItemModel } from './news-item.model';

@Injectable()
export class HnService {
  private api = 'https://node-hnapi.herokuapp.com/news?page=1';

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsItemModel[]> {
    return this.http
      .get<NewsItemModel[]>(this.api);
  }
}
