import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  baseUrl='https://reqres.in/api/users'

  constructor(private http:HttpClient) { }

  //method to add a user
  addUser(body:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,body)
  }

  //
  getUsers():Observable<any>{
    return this.http.get<any>(this.baseUrl+"?page=2")
  }

  

}
