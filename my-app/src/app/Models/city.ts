export class City{
    id:number;
    name:string;
    countryId:number;

    constructor(id:number, name:string,countryId:number){
        this.id=id;
        this.name=name;
        this.countryId=countryId;
    }
}