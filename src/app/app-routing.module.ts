import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabellenbeschreibungComponent } from './component/tabellenbeschreibung/tabellenbeschreibung.component';
import { TafelComponent } from './component/tafel/tafel.component';
import { ZelleComponent } from './component/zelle/zelle.component';

const routes: Routes = [
  {path: 'tabellenbeschriftung', component: TabellenbeschreibungComponent },
  {path: 'tafel', component: TafelComponent},
  {path: 'zelle', component: ZelleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
