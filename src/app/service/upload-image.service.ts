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
    // console.log('service/uploadImage => ');
    // console.log(userUploadedImageData.get('userPicture'));
    // console.log(userUploadedImageData.get('extractImageName'));

    return this.http.post<any>(this.serverUrl, userUploadedImageData);
    // return this.http.post<any>(this.serverUrl + 'uploadImage', {'me': 'you'});
  }

}
