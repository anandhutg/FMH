import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase{
    Id: number | null = null;
    SellRent:number | null = null;
    Name:string | null = null;
    PType:string | null = null;
    FType:string | null = null;
    Price:number | null = null;
    BHK:number  | null = null;
    BuiltArea:number | null = null;
    City:string | null = null;
    RTM:number | null = null;
    Date!:string;
    Image?:string;
    
}