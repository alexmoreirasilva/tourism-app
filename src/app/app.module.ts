import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [ AppComponent, GaleriaComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [ provideHttpClient(withFetch()) ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
