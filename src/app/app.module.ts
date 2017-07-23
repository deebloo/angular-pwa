import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HnService } from './hn.service';
import { NewsItemCardComponent } from './news-item-card/news-item-card.component';

@NgModule({
  declarations: [AppComponent, NewsItemCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
