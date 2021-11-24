import { Component,OnInit } from '@angular/core';
import {ApiService} from './api.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  QusetionData: any = [];
  p: number = 1;
  constructor(
    private ApiService: ApiService,private httpClient: HttpClient
  ) {}

  ngOnInit() {
    // this.getQuestionsList(tagName: string)
  }

  fetchquestions(tagName: string) {
  //   this.httpClient.get('https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow').
  this.httpClient.get('https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow&tagged='+tagName).subscribe((data: any) => {
      this.QusetionData=data.items
        }, (err) => {
      alert("error occured")
    })
  }

}

