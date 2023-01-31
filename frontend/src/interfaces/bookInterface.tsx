export interface review{
    title:string,
    body:string
}

export interface bookInterface{
    _id: string,
    book_id: number,
    title:string,
    author:string,
    pages:number,
    status:string,
    cost:string,
    tags:[string],
    reviews:[review],
    timestamps:string
}