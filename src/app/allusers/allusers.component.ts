import { Component, OnInit, OnDestroy } from '@angular/core';

import { AllusersService } from '../service/allusers.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  allUsersData: any = [];

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
      console.log((<any>res).data);
      this.allUsersData = (<any>res).data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
