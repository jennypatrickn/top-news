import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { Article } from '../shared/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  articleBySource : Article[];
  constructor(private route: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
    const articleSource = this.getArticleSource();
    this.newsService
        .getTopHeadlinesBySource(articleSource)
        .subscribe(response => { 
          console.log("response ",response.articles);
          this.articleBySource = response.articles as Article[];
     });
  }

  getArticleSource() {
    return this.route.snapshot.paramMap.get("source");
  }

}
