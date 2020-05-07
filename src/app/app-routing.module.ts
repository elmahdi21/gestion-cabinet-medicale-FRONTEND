import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RendezVousComponent } from 'src/components/rendez-vous/rendez-vous.component';
import { PatientComponent } from 'src/components/patient/patient.component';


const routes: Routes = [
  {path:'patient',component:PatientComponent},
  {path:'rdv',component:RendezVousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routineComponents = [PatientComponent,RendezVousComponent]