import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpHeaders,HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { config} from 'config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url=config.API_URL;
  constructor(private HttpClient:HttpClient) { }

  postdata(endpoint,data,headers){
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
   return this.HttpClient.post(this.url+endpoint,data,_options).map((responseData) => {
   return responseData;
   }, error => {
  console.log(error);
  });
  }
}