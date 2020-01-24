import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthInterceptor } from './interceptors/auth-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header/header.component';
import { StuffListComponent } from './stuff/stuff-list/stuff-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleThingComponent } from './stuff/single-thing/single-thing.component';
import { LoginComponent } from './User/auth/login/login.component';
import { SignupComponent } from './User/auth/signup/signup.component';
import { AccountComponent } from './User/account/account/account.component';
import { MyStuffComponent } from './User/account/my-stuff/my-stuff.component';
import { NewThingComponent } from './stuff/new-thing/new-thing.component';
import { ModifyComponent } from './User/account/modify/modify.component';
import { ModifyThingComponent } from './stuff/modify-thing/modify-thing.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StuffListComponent,
    HomepageComponent,
    SingleThingComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    MyStuffComponent,
    NewThingComponent,
    ModifyComponent,
    ModifyThingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
