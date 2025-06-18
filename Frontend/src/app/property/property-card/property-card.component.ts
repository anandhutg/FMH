import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";
import { IPropertyBase } from '../../model/ipropertybase';

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
    @Input() property !: IPropertyBase;
    @Input() hideIcons !: boolean;

}