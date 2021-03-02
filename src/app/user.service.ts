import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Users } from './model/User';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
 //inject http service to get user from the api
  constructor(private http: HttpClient) { }

  //url to read the user object
  url: string = "https://reqres.in/api/users"
  
  //get method to read data from the api
 getUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.url).pipe(
      map((data) => {
            return data;
           })
        );
  }
}
