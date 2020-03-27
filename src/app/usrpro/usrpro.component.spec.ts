import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrproComponent } from './usrpro.component';

describe('UsrproComponent', () => {
  let component: UsrproComponent;
  let fixture: ComponentFixture<UsrproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
