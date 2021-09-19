import { Component } from '@angular/core';
import { NewsService } from '../core/services/news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alefba';
  constructor(private api: NewsService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.log('get api: ', data);
    });
    console.log('hi');
  }
}
