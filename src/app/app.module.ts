import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import {FormsModule} from '@angular/forms';
import { HeroComponent } from './core/hero/components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
