import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { StuffListComponent } from './stuff/stuff-list/stuff-list.component';
import { SingleThingComponent } from './stuff/single-thing/single-thing.component';
import { LoginComponent } from './User/auth/login/login.component';
import { SignupComponent } from './User/auth/signup/signup.component';
import { AccountComponent } from './User/account/account/account.component';
import { MyStuffComponent } from './User/account/my-stuff/my-stuff.component';
import { NewThingComponent } from './stuff/new-thing/new-thing.component';
import { ModifyComponent } from './User/account/modify/modify.component';
import { ModifyThingComponent } from './stuff/modify-thing/modify-thing.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'all-stuff', component: StuffListComponent },
  { path: 'thing/:id', component: SingleThingComponent },
  { path: 'new-thing', component: NewThingComponent, canActivate: [AuthGuard] },
  { path: 'modify-thing/:id', component: ModifyThingComponent, canActivate: [AuthGuard]},
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'account', component: AccountComponent , canActivate: [AuthGuard]},
  { path: 'account/myStuff', component: MyStuffComponent, canActivate: [AuthGuard] },
  { path: 'account/modify/:id', component: ModifyComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
