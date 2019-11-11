import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CoursePageListComponent } from './course-page-list.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoursePageListComponent', () => {
  let component: CoursePageListComponent;
  let fixture: ComponentFixture<CoursePageListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should log course id", () => {
    let id=5;
    const consoleSpy = spyOn(console, 'log')
    component.ondeleteCourseItem(id);
    expect(consoleSpy).toHaveBeenCalled()
  })

});
