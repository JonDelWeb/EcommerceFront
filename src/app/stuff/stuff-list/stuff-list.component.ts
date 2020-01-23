import { Component, OnDestroy, OnInit } from '@angular/core';

import { StuffService } from '../../services/stuff.service';
import { Subscription } from 'rxjs';
import { Thing } from '../../models/Thing-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.scss']
})
export class StuffListComponent implements OnInit, OnDestroy {

  public stuff: Thing[] = [];
  public part: number;
  public loading: boolean;
  public email: string;

  private stuffSub: Subscription;

  constructor(
    private stuffService: StuffService,
    private router: Router,
  ) { }

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

  onProductClicked(id: string) {
    this.router.navigate(['/thing/' + id]);
  }

  ngOnDestroy() {
    this.stuffSub.unsubscribe();
  }

}
