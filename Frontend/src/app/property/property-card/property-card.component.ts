import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interfacce";
import { RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
    selector :'app-property-card',
    standalone : true,
    imports :[RouterModule,NgIf,],
    //template :'<h1> I am a card </h1>',
    //styles : ['h1{font-weight :normal;}']
    templateUrl: './property-card.component.html',
    styleUrl: './property-card.component.css'
}

)
export class PropertyCardComponent {
    @Input() property !: IProperty;

}