import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
    Id!: number | null;
    SellRent!:number | null;
    Name!:string | null;
    PType!:string | null;
    FType!:string | null;
    Price!:number | null;
    BHK!:number  | null;
    BuiltArea!:number | null;
    City!:string | null;
    RTM!:number | null;
    Date!:string;
    Image?:string;
    
}