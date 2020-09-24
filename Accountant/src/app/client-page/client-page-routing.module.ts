import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageListComponent } from './client-page-list/client-page-list.component';


const routes: Routes = [
  { path: '', component: ClientPageListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
