import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  imports:[RouterModule],
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['Id'];
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['Id'];
      }
    );
  }
  onSelectNext(){
    this.propertyId+=1;
    this.router.navigate(['property-detail',this.propertyId]);
  }
}
