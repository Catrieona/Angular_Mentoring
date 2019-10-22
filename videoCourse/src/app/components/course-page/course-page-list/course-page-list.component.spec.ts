import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageListComponent } from './course-page-list.component';

describe('CoursePageListComponent', () => {
  let component: CoursePageListComponent;
  let fixture: ComponentFixture<CoursePageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
