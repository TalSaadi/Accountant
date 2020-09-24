import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageDetailsComponent } from './client-page-details/client-page-details.component';
import { ClientPageListComponent } from './client-page-list/client-page-list.component';
import { ClientResolver } from './resolvers/client.resolver'; 

const routes: Routes = [
  { path: '', component: ClientPageListComponent, resolve: {ClientResolver}},
  { path: ':name', component: ClientPageDetailsComponent, resolve: {ClientResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
