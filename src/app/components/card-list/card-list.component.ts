import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { Locations } from '../../unidades.interface';
@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [CardComponent,CommonModule]
})
export class CardListComponent {
    @Input() unitsList: Locations[]=[]
    constructor(){}
}
