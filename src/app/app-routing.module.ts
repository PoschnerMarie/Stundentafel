import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LehrerListComponent } from './component/lehrer-list/lehrer-list.component';
import { GridComponent } from './component/grid/grid.component';
import { TabellenbeschreibungComponent } from './component/tabellenbeschreibung/tabellenbeschreibung.component';
import { TafelComponent } from './component/tafel/tafel.component';
import { TeacherListComponent } from './component/teacher-list/teacher-list.component';
import { ZelleComponent } from './component/zelle/zelle.component';

const routes: Routes = [
  {path: 'tabellenbeschriftung', component: TabellenbeschreibungComponent },
  {path: 'lehrer-list', component: LehrerListComponent },
  {path: 'tafel', component: TafelComponent},
  {path: 'teacherlist', component: TeacherListComponent},
  {path: 'grid', component: GridComponent},
  {path: 'zelle', component: ZelleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
