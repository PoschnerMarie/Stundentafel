import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabellenbeschreibungComponent } from './component/tabellenbeschreibung/tabellenbeschreibung.component';

const routes: Routes = [
  { path: 'tabellenbeschriftung', component: TabellenbeschreibungComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
