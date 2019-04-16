import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  Article } from '../shared/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input("article") article: Article;
  
  constructor() { 
  }

  ngOnInit() {
  }

}
