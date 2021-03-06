import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegistComponent } from './regist/regist.component';
import { UserComponent } from './user/user.component';
import { AllusersComponent } from './allusers/allusers.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'prefix' },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
  { path: 'map', component: MapComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'user', component: UserComponent },
  { path: 'allusers', component: AllusersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
