import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursePageHeaderComponent } from './components/course-page/course-page-header/course-page-header.component';
import { CoursePageBreadcrumbsComponent } from './components/course-page/course-page-breadcrumbs/course-page-breadcrumbs.component';
import { CoursePageSearchComponent } from './components/course-page/course-page-search/course-page-search.component';
import { CoursePageListComponent } from './components/course-page/course-page-list/course-page-list.component';
import { CourseListItemComponent } from './components/course-page/course-page-list/course-list-item/course-list-item.component';
import { CoursePageFooterComponent } from './components/course-page/course-page-footer/course-page-footer.component';
import { ItemBorderStyleDirective } from './core/directives/item-border-style.directive';
import { CourseDurationPipe } from './shared/pipes/course-duration.pipe';
import { ConfirmationDelItemComponent } from './shared/confirmation-del-item/confirmation-del-item.component';
import { LoginModule } from './shared/course-log-in/login.module';
import { AddNewCourseComponent } from './shared/course-add-new/add-new-course.component';
import { EditCourseComponent } from './shared/course-edit/edit-course.component';
import { NotFoundComponent } from './shared/not-found-component/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { LoadCourses  } from './store/effects/load.course.effect';


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
    AddNewCourseComponent,
    EditCourseComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects, LoadCourses]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  exports: [CourseListItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (router: Router) {
  }
}
