import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api_key = '77fbb327135b47dd939102b7c73fefd1';
  

  constructor(private http: HttpClient) {}


  getTopHeadlines(){
    console.log("Getting the News Api...in http.service.ts")
    return this.http.get('http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=77fbb327135b47dd939102b7c73fefd1');
  }
}// End of export
