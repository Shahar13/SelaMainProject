import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UploadImageService {

  private serverUrl = 'http://localhost:3000/uploadImage';

  constructor(private http: HttpClient) { }

  uploadImage(userUploadedImageData: any): Observable<any> {
  // uploadImage(userUploadedImageData: any) {
    console.log('service/uploadImage => ', userUploadedImageData);

    // return this.http.post(this.serverUrl + 'uploadImage', JSON.stringify(userUploadedImageData))
    // return this.http.post<any>(this.serverUrl, userUploadedImageData);
    return of('Shahar');
  }

}
