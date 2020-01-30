import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'prefix' },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  // { path: 'testShahar', component: '' },
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
