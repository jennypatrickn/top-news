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
  domainsSubject = new Subject<Articles>();
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
    // List initialization
    let domains = 'wsj.com, newsbtc.com';
    this.newsService
        .getAllFakeNewsByDomain(domains)
        .subscribe(articles => { 
          this.fetchArticles(articles);
     });
  }

  fetchArticles(articles: Articles) {
    this.domainsSubject.next(articles);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.domainsSubject.unsubscribe();
  }
}
