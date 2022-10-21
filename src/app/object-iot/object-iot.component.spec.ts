import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectIotComponent } from './object-iot.component';

describe('ObjectIotComponent', () => {
  let component: ObjectIotComponent;
  let fixture: ComponentFixture<ObjectIotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectIotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
