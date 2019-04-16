import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Articles } from './news.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  readonly API_KEY = '48e9d05d148f48439968584ba4ea656c';
  
  readonly API_ENDPOINT  = `https://newsapi.org/v2`;
  constructor(private http: HttpClient) { }

  /**
   * @memberof NewsService
   * @method getAllFakeNewsByDomain
   * @description Get all news by Domain
   * @params {void}
   * @returns { Observable<Articles>  }
   */
  getAllFakeNewsByDomain(domains): Observable<Articles> {
    const url = `${this.API_ENDPOINT}/everything?domains=${domains}&apiKey=${this.API_KEY}`;
    
    return this.http.get<Articles>(url);
  }
  
  /**
   * @memberof NewsService
   * @method getTopHeadlinesBySource
   * @description Get all news by Source supposed as like Details news by Source
   * @params {void}
   * @returns { Observable<Articles>  }
   */
  getTopHeadlinesBySource(sources): Observable<Articles> {
    const url = `${this.API_ENDPOINT}/everything?sources=${sources}&apiKey=${this.API_KEY}`;
    // Article avec filtre : https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=48e9d05d148f48439968584ba4ea656c
    return this.http.get<Articles>(url);
  }

  private log(errorMessage: string) {
    console.log(`NewsService: ${errorMessage}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
