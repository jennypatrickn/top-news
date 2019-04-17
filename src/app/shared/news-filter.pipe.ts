import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './news.model';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(articles: Article[], title: string): Article[] {
    if(!articles) return [];
    if(!title) return articles;
    return articles
            .filter(article =>  article
                                  .title
                                  .toLowerCase()
                                  .includes(title) );
  }

}
