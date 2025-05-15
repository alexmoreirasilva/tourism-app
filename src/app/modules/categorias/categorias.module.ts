import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';

import { ReactiveFormsModule } from '@angular/forms'
import { CategoriaComponent } from '../../components/categoria/categoria.component';

@NgModule({
  declarations: [ CategoriaComponent ],
  imports: [ CommonModule, CategoriasRoutingModule, ReactiveFormsModule ],
})

export class CategoriasModule {}
