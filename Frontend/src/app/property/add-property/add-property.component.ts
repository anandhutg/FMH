import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { IProperty } from '../IProperty.interfacce';
@Component({
  selector: 'app-add-property',
  imports: [FormsModule, CommonModule, PropertyCardComponent],
  standalone : true,
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  selectedTab: number = 0;
  selectedBHK: number =1; // this will hold the selected BHK value
  defaultDate: string = new Date().toISOString().split('T')[0];


  @ViewChild('Form') addPropertyForm !: NgForm;
  constructor(private router:Router) { }

  //Will come from masters
  propertTypes :Array<string> =["House","Apartment","Duplex"]
  furnishTypes :Array<string> =['Fully','Semi','Unfurnished']
  entranceTypes :Array<string>=['East','West','South','North']
  
  propertyView :IProperty={
    Id :0,
    Name:'',
    Price:0,
    SellRent:0,
    Type:""
  };

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }
  
  selectTab(index: number) {
    this.selectedTab = index;
  }

  onSubmit(){
    console.log('Congrats,Form Submitted');
    console.log(this.addPropertyForm);
  }
}
