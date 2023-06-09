export interface IBattery {
    _id: string
    imagePath:string,
    title:string,
    description:string,
    type:string,
    capacity:string,
    work_temp:string[],
    work_voltage:string[],
    available:number,
    type_connector:string,
    max_amp:string,
    date_getting:Date,
    date_write_off:Date,
    surtable_with:string[],
    guarantee:boolean,
    country: string,
    count:number,
}

