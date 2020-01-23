import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleThingComponent } from './single-thing.component';

describe('SingleThingComponent', () => {
  let component: SingleThingComponent;
  let fixture: ComponentFixture<SingleThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
