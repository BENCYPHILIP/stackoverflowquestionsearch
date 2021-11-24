import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public fetchquestions() 
  {
  return this.httpClient.get('https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&site=stackoverflow').pipe(map(res => res));

}
}


