import { Injectable, ChangeDetectorRef } from '@angular/core';
import {PageListData} from '../models/page-list-data';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataCourseService {

public showConfirmMessage = false;
public course: PageListData;
public countPage = 5;


  constructor(private httpClient: HttpClient) { }

  public getItemList() {
    let query = 'http://localhost:3004/courses'

    return this.httpClient.get<PageListData[]>(query, {params: {start: '0', count: '' + this.countPage}});
  }

  public removeItem(id: number) {

  this.httpClient.delete(`http://localhost:3004/courses/${id}`);
  this.getItemList();
  }

  public onLoadMoreCourses() {
    this.countPage += 5;
    this.getItemList();
  }

  public getCourseItem(id: number) {
    return this.httpClient.get(`http://localhost:3004/courses/${id}`);
  }

}

