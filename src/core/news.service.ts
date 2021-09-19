import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  apiCall() {
    return this.http.get(
      'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty'
    );
  }
}
