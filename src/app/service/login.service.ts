import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  loginUser(userData: any):Observable<any> {
      console.log('TJ user data', userData);

    return this.http.post('http://localhost:3000/loginUser', JSON.stringify(userData))
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
