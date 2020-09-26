import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VatPageRoutingModule} from './vat-page-routing.module';
import { VatPageComponent } from './vat-page.component';
import { VatPageCreateEditComponent } from './vat-page-create-edit/vat-page-create-edit.component';
import { VatPageCreateEditFormComponent } from './vat-page-create-edit/vat-page-create-edit-form/vat-page-create-edit-form.component';
import { VatCreateEditResolver } from './resolvers/vat-create-edit.resolver';
import { VatActions } from './store/vat-actions.service';
import { VatStore } from './store/vat-store.service';
import { VatService } from './services/vat.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VatPageDetailsComponent } from './vat-page-details/vat-page-details.component';
import { AccountantSharedTableModule } from '../accountant-shared-table/accountant-shared-table.module';
import { VatResolver } from './resolvers/vat.resolver';


@NgModule({
  declarations: [
    VatPageComponent, 
    VatPageCreateEditComponent, 
    VatPageCreateEditFormComponent, 
    VatPageDetailsComponent
  ],
  imports: [
    CommonModule,
    VatPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccountantSharedTableModule,
  ],
  providers: [
    VatCreateEditResolver,
    VatResolver, 
    VatActions,
    VatStore,
    VatService
  ]
})
export class VatPageModule { }
