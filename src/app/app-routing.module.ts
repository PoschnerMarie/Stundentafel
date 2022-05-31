import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './component/block/block.component';
import { TabellenbeschreibungComponent } from './component/tabellenbeschreibung/tabellenbeschreibung.component';
import { TafelComponent } from './component/tafel/tafel.component';
import { ZelleComponent } from './component/zelle/zelle.component';

const routes: Routes = [
  {path: 'tabellenbeschriftung', component: TabellenbeschreibungComponent },
  {path: 'tafel', component: TafelComponent},
  {path: 'zelle', component: ZelleComponent},
  {path: 'block', component: BlockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
