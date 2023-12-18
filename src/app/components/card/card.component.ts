import { Component, Input, OnInit } from '@angular/core';
import { Locations } from '../../unidades.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() card!:Locations
  constructor () {}
  
  ngOnInit(): void {
    
  }
}
