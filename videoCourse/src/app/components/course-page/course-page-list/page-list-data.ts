export interface PageListData {
    id: number;
    title: string;
    date: number;
    duration: number;
    description: string;
}

class ListDataInform implements PageListData {
    id: number;
    title: string;
    date: number;
    duration: number;
    description: string;
    constructor(id, title, date, description) {}
}