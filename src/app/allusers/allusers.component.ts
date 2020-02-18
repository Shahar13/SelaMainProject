import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { env } from '../../environments/environment';
import { AllusersService } from '../service/allusers.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  allUsersData: any = [];
  private serverUrl = env.BACKEND_SERVER;
  imgPath:string = this.serverUrl + 'public/uploads/img/'; 

  user: any = {
    userName: '',
    userPassword: '',
    userPicture: '',
    userEmail: '',
    userBirth: '',
    userWorkAddress: '',
  };

  constructor(public allUsersSrv: AllusersService) { }

  ngOnInit() {
    this.subscription = this.allUsersSrv.getAllUsers()
    // this.allUsersSrv.getAllUsers()
    .subscribe(res => {
      console.log('allusers component ==> ');
      console.log(res.data);
      this.allUsersData = res.data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
