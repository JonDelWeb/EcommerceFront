import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/User-model';
import { UserService } from '../../../services/user.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private user: User;
  private email: string;
  public part: number;

  constructor(
    private localStorage: LocalStorageService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.email = this.localStorage.get('email');
    console.log(this.email);
    this.userService.getUser(this.email)
      .then(() => {
        this.user = this.localStorage.get('currentUser');
        console.log(this.user);
      })
      .catch((err) => console.log(err));

  }
}
