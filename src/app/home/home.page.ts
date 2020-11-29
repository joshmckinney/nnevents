import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public events:any;
  
  constructor(
    private http : HttpClient) {
      this.getData();
    };

  getData(){
    let url = 'https://api.apify.com/v2/actor-tasks/dbopD6AOZdk6xD0oO/runs/last/dataset/items?token=3j2tbgAmEpLpyWAr5Jv6rhqh4&offset=1'
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.events = result;
      console.log(result);
    })
  };

}
