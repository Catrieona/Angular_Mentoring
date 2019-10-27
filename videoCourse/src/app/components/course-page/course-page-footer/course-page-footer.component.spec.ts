import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageFooterComponent } from './course-page-footer.component';

describe('CoursePageFooterComponent', () => {
  let component: CoursePageFooterComponent;
  let fixture: ComponentFixture<CoursePageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
