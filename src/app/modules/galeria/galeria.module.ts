import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@NgModule({
  declarations: [ GaleriaComponent ],
  imports: [ CommonModule, GaleriaRoutingModule, FormsModule ]
})

export class GaleriaModule {}
