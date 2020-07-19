export class Airport  {

    _id : string;
    airport_name : string;
    fuel_capacity : number;
    fuel_available : number;

}

export class Aircraft {

    _id:string;
    aircraft_no:string;
    airline : string;
    source : string;
    destination : string;
}

export class User {
    _id : string;
    name : string;
    email : string;
    password : any;
}

export class Transaction {

    _id : string;
    date_time: string;
    Type : string;
    airport_name : string;
    aircraft : string;
    fuel : number;
    transaction_id_parent : number;

}