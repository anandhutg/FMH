import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class Housing {

  constructor(private http:HttpClient) { }
  getAllproperties(SellRent:number): Observable<IPropertyBase[]>{
    return this.http.get<{[key:string]:IPropertyBase }>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array <IPropertyBase> =[];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent==SellRent){
              propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
