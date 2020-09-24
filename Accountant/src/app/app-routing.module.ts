import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';


const routes: Routes = [
  { 
    path: 'clients',
    loadChildren: () => import('./client-page/client-page.module').then(m => m.ClientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
