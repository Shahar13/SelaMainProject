import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { from } from 'rxjs';

// import { env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // configHeaderNav = [
  //   {text: 'Home', title: 'Home', target: '/'},
  //   {text: 'Map', title: 'Map', target: '/map'},
  //   {text: 'Login', title: 'Login', target: '/login'},
  //   {text: 'User', title: 'User', target: '/user'},
  //   {text: 'All Users', title: 'allusers', target: '/allusers'},
  //   {text: 'Registration', title: 'Registration', target: '/regist'},
  // ];

  title = 'SelaMainProject';
}
