import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { NgFor } from '@angular/common';
import { Housing } from '../../services/housing';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../model/ipropertybase';


@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,NgFor],
  standalone :true,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
      SellRent =1;
      properties : Array<IPropertyBase>=[] ;

      constructor(private route:ActivatedRoute,private housingService:Housing) { }

      ngOnInit() :void {
        if(this.route.snapshot.url.toString()){
          this.SellRent=2;//Means we are on rent-property URL else we are on base URL
        }

        this.housingService.getAllproperties(this.SellRent).subscribe(
            data=>{
                 this.properties=data;
                 //console.log(data);
                console.log(this.route.snapshot.url.toString());
                // const newPropertyString=localStorage.getItem('newProp')
                // if(newPropertyString){
                //   const newProperty= JSON.parse(newPropertyString);
                //   if(newProperty.SellRent==this.SellRent){
                //     this.properties=[newProperty,...this.properties];
                //   }
                // }
                
           },
           error =>{
            console.log('httperror:');
            console.log(error);
           }
        );
         //   this.htt.get('data/properties.json').subscribe(
        //      data=>{
       //          this.properties=data;
      //            console.log(data);
     //        }
    //    );
      }
}


