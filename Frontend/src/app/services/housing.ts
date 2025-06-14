import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interfacce';

@Injectable({
  providedIn: 'root'
})
export class Housing {

  constructor(private http:HttpClient) { }
  getAllproperties(SellRent:number): Observable<IProperty[]>{
    return this.http.get<{[key:string]:IProperty }>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array <IProperty> =[];
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
