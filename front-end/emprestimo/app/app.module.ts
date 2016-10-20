import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { Dashboard } from './controller';

@NgModule({
  imports:[ BrowserModule,routing ],
  declarations: [ AppComponent, Dashboard],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }