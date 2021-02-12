import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { TrakingComponent } from './pages/traking/traking.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

const routes: Routes = [
  { path: 'inicio', component: LoginComponent },
  { path: 'tasks', component: TareasComponent },
  { path: 'tracking', component: TrakingComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
