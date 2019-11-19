import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursePageSearchComponent } from './course-page-search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoursePageSearchComponent', () => {
  let component: CoursePageSearchComponent;
  let fixture: ComponentFixture<CoursePageSearchComponent>;
  let debugElement: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageSearchComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageSearchComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it("should log course id", () => {
    let userValue=debugElement.query(By.css('.course-page-search')).nativeElement.value;
    const consoleSpy = spyOn(console, 'log');
    component.getUserValue(userValue);
    expect(consoleSpy).toHaveBeenCalled();
  })


});
