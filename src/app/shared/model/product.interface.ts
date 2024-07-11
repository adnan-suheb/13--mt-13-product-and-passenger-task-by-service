


export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: productEnum;
    id: string;
}


export enum productEnum {
    InProgress = 'In Progress',
    Dispatched = 'Dispatched',
    Delivered = 'Delivered'
}