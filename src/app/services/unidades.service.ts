import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DataResponse, Locations } from '../unidades.interface';


@Injectable({
  providedIn: 'root'
})
export class UnidadesService {
  private readonly API = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'

  private todasUnidadesSubject: BehaviorSubject<Locations[]> = new BehaviorSubject<Locations[]>([]);
  private todasUnidades$: Observable<Locations[]> = this.todasUnidadesSubject.asObservable();
  private unidadesFiltradas: Locations[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<DataResponse>(this.API).subscribe(data => {
      this.todasUnidadesSubject.next(data.locations);
      this.unidadesFiltradas = data.locations;
    });
  }
  getTodasUnidades(): Observable<Locations[]> {
    return this.todasUnidades$
  }
  getUnidadesFiltradas() {
    return this.unidadesFiltradas;
  }

  setUnidadesFiltradas(value: Locations[]) {
    return this.unidadesFiltradas = value;
  }
}
