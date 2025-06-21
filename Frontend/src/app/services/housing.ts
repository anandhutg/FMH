import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
import { getSymbolIterator } from 'rxjs/internal/symbol/iterator';

@Injectable({
  providedIn: 'root'
})
export class Housing {

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5289/api/city');
  }
  getAllproperties(SellRent:number): Observable<IPropertyBase[]>{
    return this.http.get<{[key:string]:IPropertyBase }>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array <IPropertyBase> =[];
        const newPropString = localStorage.getItem('newProp');
        if(newPropString){
          const localProperties=JSON.parse(newPropString);
          if(localProperties){
            for(const id in localProperties){
          if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent==SellRent){
              propertiesArray.push(localProperties[id]);
          }
        }
          }
        }
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent==SellRent){
              propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property){
    let newProp =[property];

    // Add new property in array if newProp already exists in local storage
    const newPropString =localStorage.getItem('newProp');
    if(newPropString){
      newProp =[property, ...JSON.parse(newPropString)];
    }

    localStorage.setItem('newProp',JSON.stringify(newProp));
  }

  newPropID():number{
    const PIDString=localStorage.getItem('PID');
    if(localStorage.getItem('PID') && PIDString)
    {
      localStorage.setItem('PID',String(+PIDString+1));
      return +PIDString;
    }
    else
    {
        localStorage.setItem('PID','101');
        return 101;
    }
  }
}
