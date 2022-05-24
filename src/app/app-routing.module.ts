import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TafelComponent } from './component/tafel/tafel.component';
import { ZelleComponent } from './component/zelle/zelle.component';


const routes: Routes = [
  {path: 'tafel', component: TafelComponent},
  {path: 'zelle', component: ZelleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
