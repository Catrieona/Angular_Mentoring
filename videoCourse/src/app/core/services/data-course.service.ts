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
  public dataCourse;


//   public dataCourse: PageListData [] = [
//     {
//         id: 1,
//         title: 'Title 1',
//         description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
//         duration: 120,
//         date:  new Date('2019-11-11'),
//         topRated: true
//     },
//     {
//         id: 2,
//         title: 'Title 2',
//         description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando cuando',
//         duration: 145,
//         date:  new Date('2019-12-07'),
//         topRated: false
//     },
//     {
//         id: 3,
//         title: 'Title 3',
//         description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
//         duration: 45,
//         date:  new Date('2019-11-20'),
//         topRated: true
//     },
//     {
//         id: 4,
//         title: 'Title 4',
//         description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
//         duration: 215,
//         date:  new Date('2019-11-07'),
//         topRated: true
//     },
//     {
//         id: 5,
//         title: 'Title 5',
//         description: 'Imprentas y Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
//         duration: 55,
//         date:  new Date('2019-09-09'),
//         topRated: false
//     },
// ];

  constructor(private httpClient: HttpClient) { }

  public getItemList() {
    return this.httpClient.get<PageListData[]>('http://localhost:3004/courses?start=0&count=1')
  }

  public removeItem(id: number) {
    this.dataCourse.splice(this.dataCourse.indexOf(this.dataCourse.find(elem => elem.id === id)), 1);
    this.getItemList();
    }

  public getCourseItem(id: number) {
    this.course = this.dataCourse.find(elem => elem.id === id);
  }

}

