import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { NewsItemModel } from './news-item.model';
import { HnService } from './hn.service';

@Component({
  selector: 'app-root',
  template: `
    <app-news-item-card *ngFor="let post of posts" [item]="post"></app-news-item-card>
  `
})
export class AppComponent implements OnInit {
  posts: NewsItemModel[] = [];

  constructor(private hn: HnService, private cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  ngOnInit() {
    this.hn.getNews().then(res => {
      this.posts = res;

      this.cd.detectChanges();
    });
  }
}
