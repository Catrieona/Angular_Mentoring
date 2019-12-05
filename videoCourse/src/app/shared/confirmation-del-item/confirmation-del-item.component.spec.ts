import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDelItemComponent } from './confirmation-del-item.component';

describe('ConfirmationDelItemComponent', () => {
  let component: ConfirmationDelItemComponent;
  let fixture: ComponentFixture<ConfirmationDelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
