import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Thing } from '../../../models/Thing-model';
import { User } from '../../../models/User-model';
import { StuffService } from '../../../services/stuff.service';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-my-stuff',
  templateUrl: './my-stuff.component.html',
  styleUrls: ['./my-stuff.component.scss']
})
export class MyStuffComponent implements OnInit, OnDestroy {

  public stuff: Thing[] = [];
  public loading: boolean;
  private user;

  private stuffSub: Subscription;

  constructor(
    private router: Router,
    private stuffService: StuffService,
    private localStorage: LocalStorageService

  ) { }

  ngOnInit() {
    this.loading = true;
    this.stuffSub = this.stuffService.stuff$.subscribe(
      (stuff) => {
        this.stuff = stuff;
        this.loading = false;
      }
    );
    this.user = this.localStorage.get('currentUser');
    console.log(this.user.user._id);
    this.stuffService.getStuffByUser(this.user.user._id);
  }

  onProductClicked(id: string) {
      this.router.navigate(['/thing/' + id]);
  }

  ngOnDestroy() {
    this.stuffSub.unsubscribe();
  }

  onGoBack() {
    this.router.navigate(['/account']);
  }

}
