import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../shared/news.service';
import { Article, Source, Sources } from '../shared/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  articleBySource : Source[];
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute,
              private newsService: NewsService) { }

  ngOnInit() {
    const articleSource = this.getArticleSource();
    this.newsService
        .getTopHeadlinesBySource(articleSource)
        .subscribe(response => { 
          console.log("response ",response.sources);
          this.articleBySource = (response.sources as Source[]).filter(source => { 
            console.log(source.id, source.name, articleSource);
            // this is just way to get one unique source because the API didnt provide one
            return source.id===articleSource;
           });
           this.isLoading = false;
          },
          error => console.log(error)
        );
  }

  getArticleSource() {
    const urlParameter = this.route.snapshot.paramMap.get("source");
    return urlParameter;
  }

}
