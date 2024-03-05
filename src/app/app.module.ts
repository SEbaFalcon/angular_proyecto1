import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CounterNodule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterNodule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
