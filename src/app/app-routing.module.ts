import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosBauComponent } from './proyectos/proyectos.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfigComponent } from './configuracion/config.component';

const routes: Routes = [
  { path: 'Proyectos', component: ProyectosBauComponent, pathMatch: 'full'},
  { path: 'Tickets', component:  TicketsComponent, pathMatch: 'full'},
  { path: 'ReportesDC', component: ReportesComponent },
  { path: 'Configuracion', component: ConfigComponent, pathMatch: 'full' },
  { path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
