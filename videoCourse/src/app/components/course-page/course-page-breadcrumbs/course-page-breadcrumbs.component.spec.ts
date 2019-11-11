import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageBreadcrumbsComponent } from './course-page-breadcrumbs.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursePageBreadcrumbsComponent', () => {
  let component: CoursePageBreadcrumbsComponent;
  let fixture: ComponentFixture<CoursePageBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageBreadcrumbsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
