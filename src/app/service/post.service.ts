import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private serverUrl = env.BACKEND_SERVER;

  constructor(private http: HttpClient) { }

  sendPost(userData: FormData) {
    console.log("post service/sendPost.");
    return this.http.post(this.serverUrl + 'newPost', userData)
    .subscribe(
      (res) => {
        console.log('service/sendPost RES FROM SERVER ON THE SRV COMPONENT =>', res);
    });
  }

}
