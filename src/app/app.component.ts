import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    sites: Object;

  constructor(private _http: HttpService) {}

  ngOnInIt() {
    this.getHeadlines()
  }
  getHeadlines() {
    this._http.getTopHeadlines().subscribe(data => {
      this.sites = data;
      console.log(this.sites)
    });
  }
 
}
