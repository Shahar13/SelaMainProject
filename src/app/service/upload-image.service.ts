import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UploadImageService {
  private serverUrlUploadImage = env.BACKEND_SERVER + 'uploadImage';

  constructor(private http: HttpClient) { }

  uploadImage(userUploadedImageData: any): Observable<any> {
    return this.http.post<any>(this.serverUrlUploadImage, userUploadedImageData);
    // return of('kuku');
  }

}
