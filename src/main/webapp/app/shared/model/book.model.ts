export interface IBook {
    id?: string;
    author?: string;
    title?: string;
    isbn?: string;
}

export class Book implements IBook {
    constructor(public id?: string, public author?: string, public title?: string, public isbn?: string) {}
}
