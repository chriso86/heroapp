import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroViewModule} from './pages/hero-view/hero-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
