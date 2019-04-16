import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    NewsListComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
