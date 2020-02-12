import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UploadImageService {

  private serverUrlUploadImage = 'http://localhost:3000/uploadImage';

  constructor(private http: HttpClient) { }

  uploadImage(userUploadedImageData: any): Observable<any> {
    return this.http.post<any>(this.serverUrlUploadImage, userUploadedImageData);
    // return of('kuku');
  }

}
