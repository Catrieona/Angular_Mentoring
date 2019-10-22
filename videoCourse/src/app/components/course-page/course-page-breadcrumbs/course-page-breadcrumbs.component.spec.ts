import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageBreadcrumbsComponent } from './course-page-breadcrumbs.component';

describe('CoursePageBreadcrumbsComponent', () => {
  let component: CoursePageBreadcrumbsComponent;
  let fixture: ComponentFixture<CoursePageBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
