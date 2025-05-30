import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../classes/lugares/lugar';
import { Categoria } from '../../classes/categoria/categoria';
import { LugarService } from '../../services/lugares/lugar.service';
import { CategoriaService } from '../../services/categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})

export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService, 
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() : void {
    this.categoriaService.obterTodos().subscribe(categorias => this.categoriasFiltro = categorias);
    this.lugarService.obterTodos().subscribe(lugares => this.lugares = lugares);
  }

  getTotalEstrelas(lugar: Lugar) : string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }

  filtrar() {
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(lugares => this.lugares = lugares);
  }
}
