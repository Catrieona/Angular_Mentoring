export interface UserData {
    id: number;
    firstName: string;
    lirstName: string;
    
}


class UserDataInform implements UserData {
    id: number;
    firstName: string;
    lirstName: string;
    constructor(id, firstName, lastName) {}

}