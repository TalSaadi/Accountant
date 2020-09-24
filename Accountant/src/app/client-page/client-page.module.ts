import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './client-page.component';
import { ClientPageDetailsComponent } from './client-page-details/client-page-details.component';
import { ClientPageListComponent } from './client-page-list/client-page-list.component';
import { ClientPageRoutingModule } from './client-page-routing.module';



@NgModule({
  declarations: [
    ClientPageComponent,
    ClientPageDetailsComponent,
    ClientPageListComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule
  ]
})
export class ClientPageModule { }
