import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private serverUrl = env.BACKEND_SERVER;

  constructor(private http: HttpClient) { }

  loginUser(userData: any):Observable<any> {
    console.log('TJ user data', userData);

    return this.http.post(this.serverUrl + 'loginUser', JSON.stringify(userData))
    // .subscribe(
      // res => {
          // const response = res.text();
      // });
    // .subscribe((data) => {
    //   console.log('TJ user data', data);
    // });
    // return this.http.post<any>()
    // return userData;
    
  }

}
