export interface PageListData {
    id: number;
    name: string;
    description: string;
    istopRated: boolean;
    date: string;
    authors?: [{
      id: number;
      name: string;
      lastName: string;
    }],
    length: number;
}