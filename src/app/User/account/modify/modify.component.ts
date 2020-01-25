import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../models/User-model';

import { UserService } from '../../../services/user.service';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  public userForm: FormGroup;
  public user: User;
  public userId: string;
  public loading: boolean;

  constructor(private userService: UserService,
              private localStorage: LocalStorageService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.userForm = this.formBuilder.group({
      mail : [null, Validators.required],
      // password : [null, Validators.required]
    });
    this.route.params.subscribe(
      (params) => {
        this.userService.getUserById(params.id)
          .then(
            (user: User) => {
              this.user = user;
              console.log(user);
              this.userForm.get('mail').setValue(this.user.user.email);
              this.loading = false;
            }
          )
          .catch(err => console.log(err));
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const user = new User();
    user.email = this.user.email;

  }

  onGoBack() {
    this.router.navigate(['/account']);
  }

}
