import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { User } from '../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorage: LocalStorageService

  ) { }

  getUser(email: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/getUser',
        { email: email })
        .subscribe(
          (user: User) => {
            this.user = user;
            this.localStorage.store('currentUser', this.user);
            resolve();
          },
          (error: Error) => {
            console.log(error, 'Error getting user');
            reject(error);
          }
        );
    });
  }

  getUserById(id: number) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/getUserById',
        { id: id })
        .subscribe(
          (user: User) => {
            this.user = user;
            this.localStorage.store('currentUser', this.user);
            resolve();
          },
          (error: Error) => {
            console.log(error, 'Error getting user');
            reject(error);
          }
        );
    });
  }
}
