import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AllusersService {

  private serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    console.log('service/getAllUsers allUserData => ');
    // console.log(userData);
    // JSON.stringify(userData)
    return this.http.get(this.serverUrl + 'allUsers');
  }
}
