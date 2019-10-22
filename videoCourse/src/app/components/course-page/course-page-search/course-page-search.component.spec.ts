import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageSearchComponent } from './course-page-search.component';

describe('CoursePageSearchComponent', () => {
  let component: CoursePageSearchComponent;
  let fixture: ComponentFixture<CoursePageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
