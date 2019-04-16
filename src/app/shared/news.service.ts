import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  readonly API_KEY = '8e9d05d148f48439968584ba4ea656c';
  
  readonly API_ENDPOINT  = `https://newsapi.org/v2`;
  constructor(private http: HttpClient) { }

  getAllFakeNewsByDomain(domains): Observable<Articles> {
    const url = `${this.API_ENDPOINT}/everything?domains=${domains}&apiKey=${this.API_KEY}`;
    
    return this.http.get<Articles>(url);
  }
  
  getTopHeadlinesBySource(sources) {
    const url = `${this.API_ENDPOINT}/everything?sources=${sources}&apiKey=${this.API_KEY}`;
    // Article avec filtre : https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=48e9d05d148f48439968584ba4ea656c
    return this.http.get<Articles>(url);
  }
}
