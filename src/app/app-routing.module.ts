import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './consultar-personas/consultar-personas.component';


const routes: Routes = [
  { path: 'crearPersona', component : CrearPersonaComponent },
  { path: 'consultarPersona', component : ConsultarPersonasComponent},
  { path: '', redirectTo: 'consultarPersona', pathMatch: 'full' },
	{ path: '**', component: ConsultarPersonasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
