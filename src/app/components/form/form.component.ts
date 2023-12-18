import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Locations } from '../../unidades.interface';
import { UnidadesService } from '../../services/unidades.service';
import { UnidadesFiltradas } from '../../services/unidades-filtradas.service';

@Component({
  selector: 'app-forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Locations[] = [];
  filteredResults: Locations[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unidadeService: UnidadesService,
    private unidadeFiltradaService: UnidadesFiltradas) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unidadeService.getTodasUnidades().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.unidadeFiltradaService.filter(this.results, showClosed, hour);
    this.unidadeService.setUnidadesFiltradas(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.formGroup.reset();
  }

}