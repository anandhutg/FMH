import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-property',
  imports:[FormsModule,NgIf],
  standalone : true,
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm !: NgForm;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log('Congrats,Form Submitted');
    console.log(this.addPropertyForm);
  }
}
