import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleClassBindingComponent } from './style-class-binding/style-class-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { AtrributeBindingComponent } from './atrribute-binding/atrribute-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleClassBindingComponent,
    ClassBindingComponent,
    AtrributeBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
