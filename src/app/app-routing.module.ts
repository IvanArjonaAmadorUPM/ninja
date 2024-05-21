import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { RankedComponent } from './pages/ranked/ranked.component';
import { ReglasComponent } from './pages/reglas/reglas.component';

const routes: Routes = [
  { path: 'ranked', component: RankedComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'reglas', component: ReglasComponent },
  { path: '', redirectTo: '/ranked', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }