import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouloopComponent } from './youloop.component';

describe('YouloopComponent', () => {
  let component: YouloopComponent;
  let fixture: ComponentFixture<YouloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouloopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
