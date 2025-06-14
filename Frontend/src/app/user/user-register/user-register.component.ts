import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  standalone:true,
  imports:[ReactiveFormsModule,FormsModule,CommonModule,NgIf],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm !: FormGroup;
  user!: User;
  userSubmitted!:boolean;
  

  constructor(
  private fb:FormBuilder,
  private UserService:UserServiceService,
  private alertify:AlertifyService,
  ) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName : new FormControl('Mark',Validators.required),
    //   email :new FormControl(null,[Validators.required,Validators.email]),
    //   password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword :new FormControl(null,[Validators.required]),
    //   mobile : new FormControl(null,[Validators.required,Validators.minLength(10)])
    // }, { validators: this.passwordMatchingValidator }
    // );
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group(
      {
        userName :[null,Validators.required],
        email :[null,[Validators.required,Validators.email]],
        password :[null,[Validators.required,Validators.minLength(8)]],
        confirmPassword :[null,[Validators.required]],
        mobile :[null,[Validators.required,Validators.minLength(10)]],
      },{Validators :this.passwordMatchingValidator}
    )
  }

  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl): ValidationErrors | null =>
  {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
    {notmatched:true};
  }

  userData() :User{
    return this.user={
      userName :this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }

  //Getter methods for all form controls--------------------------------
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registerationForm.get('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  //------------------------------------------------------------------
  onSubmit(){
  console.log(this.registerationForm.value);
  this.userSubmitted=true;
  if(this.registerationForm.valid){
    //this.user = Object.assign(this.user,this.registerationForm.value);
    this.UserService.addUser(this.userData());
    this.registerationForm.reset();
    this.userSubmitted=false;
    this.alertify.success("Congrats, you are succesfully registered!!");
  }
  else{
    this.alertify.error("Kindly provide the required field!!");
    
  }
  }


  

}
