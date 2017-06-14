import { Injectable } from '@angular/core';

import { NewsItemModel } from './news-item.model';

@Injectable()
export class HnService {
  private api = 'https://node-hnapi.herokuapp.com/news?page=1';

  getNews(): Promise<NewsItemModel[]> {
    return fetch(this.api)
      .then(res => res.json());
  }
}
