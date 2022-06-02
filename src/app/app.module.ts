import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TafelComponent } from './component/tafel/tafel.component';
import { ZelleComponent } from './component/zelle/zelle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabellenbeschreibungComponent } from './component/tabellenbeschreibung/tabellenbeschreibung.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TafelComponent,
    ZelleComponent,
    TabellenbeschreibungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
