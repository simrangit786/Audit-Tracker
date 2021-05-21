import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private APISERVER = "http://localhost:8001/blogs"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpclient : HttpClient) { }

  public sendGetrequest(){
    return this.httpclient.get(this.APISERVER);
  }


  create(data): Observable<any> {
    return this.httpclient.post(this.APISERVER, data);
  }

  delete(id): Observable<any> {
    return this.httpclient.delete(`${this.APISERVER}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpclient.delete(this.APISERVER);
  }
  
}
