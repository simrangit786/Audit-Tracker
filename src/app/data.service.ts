import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


  addNewProduct(data): Observable<any> {
    return this.httpclient.post(this.APISERVER, data);
  }
/*
  addNewProduct(Create):Observable<Create> {
    return this.httpclient.post<Create>(this.APISERVER + '/products/', JSON.stringify(Create), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
*/
}
