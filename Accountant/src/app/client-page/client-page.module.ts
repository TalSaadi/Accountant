import { NgModule } from '@angular/core';
import { ClientPageComponent } from './client-page.component';
import { ClientPageDetailsComponent } from './client-page-details/client-page-details.component';
import { ClientPageListComponent } from './client-page-list/client-page-list.component';
import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientResolver } from './resolvers/client.resolver';
import { AccountantSharedTableModule } from '../accountant-shared-table/accountant-shared-table.module';
import { CommonModule } from '@angular/common';
import { ClientActions } from './store/client-actions.service';
import { ClientStore } from './store/client-store.service';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';


@NgModule({
  declarations: [
    ClientPageComponent,
    ClientPageDetailsComponent,
    ClientPageListComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    AccountantSharedTableModule,
    HttpClientModule
  ],
  providers: [
    ClientResolver, 
    ClientActions, 
    ClientStore, 
    ClientService
  ]
  })
export class ClientPageModule { }
