import { UnidadesService } from './services/unidades.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LegendsComponent } from "./components/legends/legends.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BehaviorSubject } from 'rxjs';
import { Locations } from './unidades.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './app.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,AppModule, RouterOutlet,FormsModule, ReactiveFormsModule, HeaderComponent, LegendsComponent, CardListComponent, FooterComponent],
})
export class AppComponent {
  showList = new BehaviorSubject(false)
  unitsList:Locations[]=[]

  constructor(private unidadesService:UnidadesService){}

  onSubmit(){
    this.unitsList = this.unidadesService.getUnidadesFiltradas()
    this.showList.next(true)
  }
}
