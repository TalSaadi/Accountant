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
import { ClientPageCreateEditComponent } from './client-page-create-edit/client-page-create-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientPageCreteEditFormComponent } from './client-page-create-edit/client-page-crete-edit-form/client-page-crete-edit-form.component';
import { ClientCreateEditResolver } from './resolvers/client-create-edit.resolver';


@NgModule({
  declarations: [
    ClientPageComponent,
    ClientPageDetailsComponent,
    ClientPageListComponent,
    ClientPageCreateEditComponent,
    ClientPageCreteEditFormComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    AccountantSharedTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientResolver, 
    ClientCreateEditResolver,
    ClientActions, 
    ClientStore, 
    ClientService
  ]
  })
export class ClientPageModule { }
