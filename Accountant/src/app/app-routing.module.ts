import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';


const routes: Routes = [
  { 
    path: 'clients',
    loadChildren: () => import('./client-page/client-page.module').then(m => m.ClientPageModule)
  },
  {
    path: 'vats',
    loadChildren: () => import('./vat-page/vat-page.module').then(m => m.VatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
