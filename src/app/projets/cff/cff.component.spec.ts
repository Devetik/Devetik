import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFFComponent } from './cff.component';

describe('CFFComponent', () => {
  let component: CFFComponent;
  let fixture: ComponentFixture<CFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
