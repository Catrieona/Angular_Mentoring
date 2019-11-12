import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseListItemComponent } from './course-list-item.component';


describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let debugElement: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.courseData=[{id:1, title: 'testTitle', description: 'testDiscr', duration: 'testDuration', date: new Date('20019 Nov 17'), topRated: true}];
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have course item title inide <h2>', () => {
    fixture.detectChanges();
    debugElement
    .query(By.css('.course-itme-inform-header'))
    const h2 = debugElement.nativeElement;
    expect(h2.innerText).toMatch(/testTitle/i);
  });

  it('should have course description', () => {
    fixture.detectChanges();
    debugElement
    .query(By.css('.course-itme-inform-text'))
    const p = debugElement.nativeElement;
    expect(p.innerText).toMatch(/testDiscr/i);
  });

  it('should have course duration', () => {
    fixture.detectChanges();
    debugElement
    .query(By.css('.course-itme-timeline-duration'))
    const div = debugElement.nativeElement;
    expect(div.innerText).toMatch(/testDuration/i);
  });

  it('should have course date', () => {
    fixture.detectChanges();
    debugElement
    .query(By.css('.course-itme-timeline-calendar'))
    const div = debugElement.nativeElement;
    expect(div.innerText).toMatch(/testDate/i);
  });


  it('should test emitter with spy', () => {
    spyOn(component.onDeleteCourseItem, 'emit');
    const button = fixture.nativeElement.querySelector('.course-itme-delete');
    button.click();
    expect(component.onDeleteCourseItem.emit).toHaveBeenCalledWith(1);
  });

  it('should test the emitter with a simple subscribe', () => {
    let onDeleteCourseItem;
    component.onDeleteCourseItem.subscribe(d => {
      onDeleteCourseItem = d;
    });

    component.deleteCourseItem(1);
    expect(onDeleteCourseItem).toBe(1);
  });


});
