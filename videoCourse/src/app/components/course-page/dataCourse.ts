import {PageListData} from "../models/page-list-data"


export class ElementData {
    constructor() { }
  
 dataCourse: PageListData [] = [
        {
            id: 1,
            title: "Title 1",
            description: "Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando",
            duration: "1h 25 min",
            date: "12 Jun 2019"
        },
        {
            id: 2,
            title: "Title 2",
            description: "Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando cuando",
            duration: "2h 25 min",
            date: "2 Nov 2019"
        },
        {
            id: 3,
            title: "Title 3",
            description: "Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando",
            duration: "1h 55 min",
            date: "19 Apr 2018"
        },
        {
            id: 4,
            title: "Title 4",
            description: "Imprentas y archivos de texto. Lorem Ipsum ha sido el text de Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando",
            duration: "1h 25 min",
            date: "25 Nov 2019"
        },
        {
            id: 5,
            title: "Title 5",
            description: "Imprentas y Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año Imprentas y archivos de texto. Lorem Ipsum ha sido el text de relleno estándar de las industrias desde el año 1500, cuando",
            duration: "1h 25 min",
            date: "13 Mar 2019"
        },
    ]

    deleteItem (id) {
        console.log(id)
    }
}






