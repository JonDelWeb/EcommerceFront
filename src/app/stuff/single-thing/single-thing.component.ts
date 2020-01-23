import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Thing } from '../../models/Thing-model';
import { StuffService } from '../../services/stuff.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-thing',
  templateUrl: './single-thing.component.html',
  styleUrls: ['./single-thing.component.scss']
})
export class SingleThingComponent implements OnInit, OnDestroy {

  public thing: Thing;
  public loading: boolean;
  public userId: string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private stuffService: StuffService,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.userId = this.auth.userId ? this.auth.userId : 'userID40282382';
    this.route.params.subscribe(
      (params: Params) => {
        this.stuffService.getThingById(params.id).then(
          (thing: Thing) => {
            this.loading = false;
            this.thing = thing;
            console.log(this.thing);
          }
        );
      }
    );
  }

  onGoBack() {
    this.router.navigate(['/all-stuff']);
  }

  onModify() {
    this.router.navigate(['/modify-thing/' + this.thing._id]);
  }

  onDelete() {
    this.loading = true;
    this.stuffService.deleteThing(this.thing._id)
      .then(
        () => {
          this.loading = false;
          this.router.navigate(['/all-stuff']);
        }
      );
  }

  ngOnDestroy() {
    
  }
}
