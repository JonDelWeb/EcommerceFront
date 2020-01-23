import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Thing } from '../models/Thing-model';

import { StuffService } from '../services/stuff.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public stuff: Thing[] = [];
  public loading: boolean;

  private stuffSub: Subscription;

  constructor(private stuffService: StuffService,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;

    this.stuffSub = this.stuffService.stuff$.subscribe(
      (stuff) => {
        this.stuff = stuff;
        this.loading = false;
      }
    );
    this.stuffService.getStuff();
  }

  ngOnDestroy() {
    this.stuffSub.unsubscribe();
  }

}
