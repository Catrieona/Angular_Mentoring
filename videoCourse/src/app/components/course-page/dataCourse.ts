import {PageListData} from '../models/page-list-data';


export class ElementData {
 public dataCourse: PageListData [] = [
        {
            id: 1,
            title: 'Title 1',
            description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
            duration: '1h 25 min',
            date:  new Date('2019-11-11'),
            topRated: true
        },
        {
            id: 2,
            title: 'Title 2',
            description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando cuando',
            duration: '2h 25 min',
            date:  new Date('2019-12-07'),
            topRated: false
        },
        {
            id: 3,
            title: 'Title 3',
            description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
            duration: '1h 55 min',
            date:  new Date('2019-11-20'),
            topRated: true
        },
        {
            id: 4,
            title: 'Title 4',
            description: 'Imprentas y archivos de texto. Lorem Ipsum ha sido el text de Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
            duration: '1h 25 min',
            date:  new Date('2019-11-07'),
            topRated: true
        },
        {
            id: 5,
            title: 'Title 5',
            description: 'Imprentas y Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando',
            duration: '1h 25 min',
            date:  new Date('2019-09-09'),
            topRated: false
        },
    ]

   public deleteItem(id:number) {
        console.log(id);
    }
}






