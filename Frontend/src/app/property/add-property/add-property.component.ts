import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { IPropertyBase } from '../../model/ipropertybase';
import { Property } from '../../model/property';
import { Housing } from '../../services/housing';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-add-property',
  imports: [FormsModule, CommonModule, PropertyCardComponent,ReactiveFormsModule],
  standalone : true,
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  selectedTab: number = 0;
  selectedBHK: number =1; // this will hold the selected BHK value
  defaultDate: string = new Date().toISOString().split('T')[0];
  nextClicked=false;
  property = new Property();


  //@ViewChild('Form') addPropertyForm !: NgForm;
  constructor(private router:Router,
              private fb :FormBuilder,
              private housingService : Housing,
              private alertify:AlertifyService) { }

  addPropertyForm!:FormGroup;

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      BasicInfo:this.fb.group({
        SellRent:[Validators.required],
        PType:[null,Validators.required],
        FType:[null,Validators.required],
        Name:[null,Validators.required],
        City:[null,Validators.required],
        BHK:[null,Validators.required]
      }),
      PriceInfo:this.fb.group({
        Price:[null,Validators.required],
        BuiltArea:[null,Validators.required],
      }),
    });
  }


  //Getter Methods---------------------------------------------------------------
  get BasicInfo():FormGroup{
    return this.addPropertyForm.get('BasicInfo') as FormGroup;
  }

  get PriceInfo():FormGroup{
    return this.addPropertyForm.get('PriceInfo') as FormGroup;
  }

  get Price():FormControl{
    return this.PriceInfo.get('Price') as FormControl;
  }

  get SellRent():FormControl{
    return this.BasicInfo.get('SellRent') as FormControl;
  }
  //-----------------------------------------------------------------------------

  //Will come from masters
  propertyTypes :Array<string> =["House","Apartment","Duplex"]
  furnishTypes :Array<string> =['Fully','Semi','Unfurnished']
  entranceTypes :Array<string>=['East','West','South','North']
  
  propertyView :IPropertyBase={
    Id: null,
    Name: '',
    Price: null,
    SellRent: 1,
    PType: "",
    FType: "",
    BHK: null,
    BuiltArea: null,
    City: '',
    RTM: null
  };

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  onBack()
  {
    this.router.navigate(['/']);
  }
  
  selectTab(current:number,index: number,IsCurrentTabValid:boolean) {
    this.nextClicked=true;
    if(IsCurrentTabValid){
      this.selectedTab = index;
      this.nextClicked=false;
    }
    else{
      this.selectedTab=current;
    }
  }

  onSubmit(){
    this.nextClicked=true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('Congrats,Your property is successfully Registered');
      console.log(this.addPropertyForm);

      if(this.SellRent.value==='2'){
        this.router.navigate(['/rent-property']);
      }
      else{
        this.router.navigate(['/'])
      }

    }
    else{
      this.alertify.error('Please Review the form and provide valid entries!!')
    }
  }

  allTabsValid():boolean{
    if(this.BasicInfo.invalid){
      this.selectedTab=0;
      return false;
    }
    if(this.PriceInfo.invalid){
      this.selectedTab=1;
      return false;
    }
    return true;
  }

  mapProperty():void{
    this.property.Id=this.housingService.newPropID();
    this.property.SellRent=+this.SellRent.value;
    this.property.Name=this.BasicInfo.get('Name')?.value;
    this.property.PType=this.BasicInfo.get('PType')?.value;
    this.property.FType=this.BasicInfo.get('FType')?.value;
    this.property.Price=this.Price.value;
    this.property.BHK=this.BasicInfo.get('BHK')?.value;
    this.property.BuiltArea=this.PriceInfo.get('BuiltArea')?.value;
    this.property.City=this.BasicInfo.get('City')?.value;
    this.property.Date=new Date().toString();
  }
}
