import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageCreateEditComponent } from './client-page-create-edit/client-page-create-edit.component';
import { ClientPageDetailsComponent } from './client-page-details/client-page-details.component';
import { ClientPageListComponent } from './client-page-list/client-page-list.component';
import { ClientResolver } from './resolvers/client.resolver'; 
import { ClientCreateEditResolver } from './resolvers/client-create-edit.resolver';

const routes: Routes = [
  { path: '', component: ClientPageListComponent, resolve: {ClientResolver}},
  { path: 'create', component: ClientPageCreateEditComponent, resolve: {ClientCreateEditResolver}},
  { path: ':name', component: ClientPageDetailsComponent, resolve: {ClientResolver}},
  { path: ':name/edit', component: ClientPageCreateEditComponent, resolve: {ClientCreateEditResolver}},
  { path: '**', component: ClientPageListComponent, resolve: {ClientResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
