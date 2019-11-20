import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursePageHeaderComponent } from './components/course-page/course-page-header/course-page-header.component';
import { CoursePageBreadcrumbsComponent } from './components/course-page/course-page-breadcrumbs/course-page-breadcrumbs.component';
import { CoursePageSearchComponent } from './components/course-page/course-page-search/course-page-search.component';
import { CoursePageListComponent } from './components/course-page/course-page-list/course-page-list.component';
import { CourseListItemComponent } from './components/course-page/course-page-list/course-list-item/course-list-item.component';
import { CoursePageFooterComponent } from './components/course-page/course-page-footer/course-page-footer.component';
import { ItemBorderStyleDirective } from './components/course-page/course-page-list/course-list-item/item-border-style.directive';
import { CourseDurationPipe } from './components/course-page/course-page-list/course-list-item/course-duration.pipe';
import { ConfirmationDelItemComponent } from './components/course-page/course-page-list/confirmation-del-item/confirmation-del-item.component';
import { LoginModule } from './components/course-log-in/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    CoursePageComponent,
    CoursePageHeaderComponent,
    CoursePageBreadcrumbsComponent,
    CoursePageSearchComponent,
    CoursePageListComponent,
    CourseListItemComponent,
    CoursePageFooterComponent,
    ItemBorderStyleDirective,
    CourseDurationPipe,
    ConfirmationDelItemComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [CourseListItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor (router: Router) {
  console.log("Routes:", JSON.stringify(router.config, undefined, 2))
}

}
