import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugarComponent } from './components/lugar/lugar.component';

@NgModule({
  declarations: [ AppComponent, LugarComponent ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [ provideHttpClient(withFetch()) ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
