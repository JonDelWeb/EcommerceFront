import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StuffService } from '../../services/stuff.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { mimeType } from '../mime-type-validators';
import { Thing } from '../../models/Thing-model';

@Component({
  selector: 'app-modify-thing',
  templateUrl: './modify-thing.component.html',
  styleUrls: ['./modify-thing.component.scss']
})
export class ModifyThingComponent implements OnInit {

  public thingForm: FormGroup;
  public thing: Thing;
  public loading = false;
  public part: number;
  public userId: string;
  public imagePreview: string;
  public errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private stuffService: StuffService,
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.userId = this.auth.userId;
    this.route.params.subscribe(
      (params) => {
        this.stuffService.getThingById(params.id).then(
          (thing: Thing) => {
            this.thing = thing;
            this.thingForm = this.formBuilder.group({
              title: [thing.title, Validators.required],
              description: [thing.description, Validators.required],
              price: [thing.price / 100, Validators.required],
              image: [thing.imageUrl, Validators.required, mimeType]
            });
            this.imagePreview = thing.imageUrl;
            this.loading = false;
          }
        );
      }
    );
  }

  onSubmit() {
    this.loading = true;
    const thing = new Thing();
    thing._id = this.thing._id;
    thing.title = this.thingForm.get('title').value;
    thing.description = this.thingForm.get('description').value;
    thing.price = this.thingForm.get('price').value * 100;
    thing.imageUrl = '';
    thing.userId = this.userId;
    thing.rate = 0;
    this.stuffService.modifyThingWithFile(this.thing._id, thing, this.thingForm.get('image').value).then(
      () => {
        this.thingForm.reset();
        this.loading = false;
        this.router.navigate(['/account/myStuff']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.thingForm.get('image').patchValue(file);
    this.thingForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.thingForm.get('image').valid) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
  }
}
