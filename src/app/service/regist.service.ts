import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistService {

  private serverUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  registUser(userData: FormData) {
    return this.http.post(this.serverUrl + 'register', userData)
    .subscribe(
      (res) => {
        console.log('service/registUser RES FROM SERVER ON THE SRV COMPONENT =>', res);
    });

  }

}
