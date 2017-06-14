import { Component, Input } from '@angular/core';
import { NewsItemModel } from '../news-item.model';

@Component({
  selector: 'app-news-item-card',
  template: `
    <a [href]="item.url">{{item.title}}</a>

    <div>{{item.points}} points by {{item.user}} {{item.time_ago}}</div>
  `,
  styleUrls: ['./news-item-card.component.css']
})
export class NewsItemCardComponent {
  @Input() item: NewsItemModel;
}
