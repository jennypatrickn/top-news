import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { Articles, Article } from '../shared/news.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles: Article[];
  titleText : string = "";
  domainsSubject = new Subject<Articles>();
  isLoading: boolean = true;
  // list news article fetched and pass to <app-news-item> component
  constructor(private newsService: NewsService) { 
    this.domainsSubject.subscribe(articles => {
      // this.articles.totalResults = articles.totalResults;
      // this.articles.status       = articles.status;
      this.articles = articles.articles as Article[];
      console.log(this.articles);
    });
  }

  ngOnInit() {
    // List initialization / just to simulate all news contains a letter
    let query = 'a';
    this.newsService
        .getAllFakeNewsByDomain(query)
        .subscribe(articles => {
          this.isLoading = false; 
          this.fetchArticles(articles);
     }  ,
     error => console.log(error));
  }

  fetchArticles(articles: Articles) {
    this.domainsSubject.next(articles);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.domainsSubject.unsubscribe();
  }
}
