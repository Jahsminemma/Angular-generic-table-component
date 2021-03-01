import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Users } from './model/User';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
 //inject http service to get user from the api
  constructor(private http: HttpClient) { }

  //url to read the user object
  url: string = "https://jsonplaceholder.typicode.com/users"
  
  //get method to read data from the api
  getUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.url)
  }
}
