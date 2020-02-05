import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllusersService } from '../service/allusers.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  data: any = {
    userName: '',
    userPassword: '',
    userPicture: '',
    userEmail: '',
    userBirth: '',
    userWorkAddress: '',
  };

  constructor(private http: HttpClient, public allUsersSrv: AllusersService) { }

  ngOnInit() {
    this.allUsersSrv.getAllUsers();
  }

}
