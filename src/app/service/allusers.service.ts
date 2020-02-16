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
    // TO READ TODAY 
    // rxjs pipe
    // rxjs operator map
    // array map
    return this.http.get(this.serverUrl + 'allUsers').pipe(
      map((items:any)=>{ 
        console.log("ITEMS");
        console.log(items);
      
        return items;

        // return items.data.map((item)=>({
          // ...item,
          // ImageSrc: this.serverUrl + 'uploads/img/' +item.ImageSrc
        // }));
      })
    );
  }
}
