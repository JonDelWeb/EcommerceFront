import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyThingComponent } from './modify-thing.component';

describe('ModifyThingComponent', () => {
  let component: ModifyThingComponent;
  let fixture: ComponentFixture<ModifyThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
