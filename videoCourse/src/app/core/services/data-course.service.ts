import { Injectable, ChangeDetectorRef } from '@angular/core';
import {PageListData} from '../models/page-list-data';
import { HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataCourseService {

public showConfirmMessage = false;
public course: PageListData;
public countPage = 5;

  courses$ = new BehaviorSubject<PageListData[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getItemList() {
    let query = 'http://localhost:3004/courses';
    return this.httpClient.get<PageListData[]>(query, {params: {start:'0', count:'' + this.countPage}})
  }

  public removeItem({id}) {
   return this.httpClient.delete(`http://localhost:3004/courses/${id}`)
  }

  public onLoadMoreCourses() {
    this.countPage += 5;
    return this.getItemList();
  }

  public getCourseItem(id: number) {
    return this.httpClient.get(`http://localhost:3004/courses/${id}`);
  }

  public SearchCourseItem(value: string) {
    let query = 'http://localhost:3004/courses';
    this.httpClient.get<PageListData[]>(query, {params: {textFragment: value}})
   .subscribe(response => this.courses$.next(response));
  }

  public editCourseItem (id: string, courseModel: PageListData) {
   return this.httpClient.patch<PageListData>(`http://localhost:3004/courses/${id}`, courseModel);
  }

  public saveNewItem (newCourseItem) {
    return this.httpClient.post('http://localhost:3004/courses', newCourseItem );  }
}

