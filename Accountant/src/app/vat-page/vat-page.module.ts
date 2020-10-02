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
import { VatPageCreateEditExpenseComponent } from './vat-page-create-edit-expense/vat-page-create-edit-expense.component';
import { VatPageCreateEditExpenseFormComponent } from './vat-page-create-edit-expense/vat-page-create-edit-expense-form/vat-page-create-edit-expense-form.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { VatPageCreateEditProfitComponent } from './vat-page-create-edit-profit/vat-page-create-edit-profit.component';
import { VatPageCreteEditProfitFormComponent } from './vat-page-create-edit-profit/vat-page-crete-edit-profit-form/vat-page-crete-edit-profit-form.component';


@NgModule({
  declarations: [
    VatPageComponent, 
    VatPageCreateEditComponent, 
    VatPageCreateEditFormComponent, 
    VatPageDetailsComponent, 
    VatPageCreateEditExpenseComponent, 
    VatPageCreateEditExpenseFormComponent,
    VatPageCreateEditProfitComponent, 
    VatPageCreteEditProfitFormComponent
  ],
  imports: [
    CommonModule,
    VatPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccountantSharedTableModule,
    NgbDatepickerModule,
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
