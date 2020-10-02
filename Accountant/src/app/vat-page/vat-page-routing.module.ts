import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VatPageCreateEditComponent } from './vat-page-create-edit/vat-page-create-edit.component';
import { VatPageDetailsComponent } from './vat-page-details/vat-page-details.component';
// import { VatPageListComponent } from './vat-page-list/vat-page-list.component';
import { VatResolver } from './resolvers/vat.resolver'; 
import { ExpenseResolver } from './resolvers/expense.resolver';
import { VatCreateEditResolver } from './resolvers/vat-create-edit.resolver';
import { VatPageCreateEditExpenseComponent } from './vat-page-create-edit-expense/vat-page-create-edit-expense.component';
import { VatPageCreateEditProfitComponent } from './vat-page-create-edit-profit/vat-page-create-edit-profit.component';

const routes: Routes = [
//   { path: '', component: VatPageListComponent, resolve: {VatResolver}},
  { path: 'create', component: VatPageCreateEditComponent, resolve: {VatCreateEditResolver}},
  { path: ':id/expense/create', component: VatPageCreateEditExpenseComponent},
  { path: ':id/profit/create', component: VatPageCreateEditProfitComponent, resolve: {VatCreateEditResolver}},
  { path: ':id/expense/:expenseId/edit', component: VatPageCreateEditExpenseComponent, resolve : {ExpenseResolver}},
  { path: ':id/profit/:profitId/edit', component: VatPageCreateEditProfitComponent, resolve: {VatCreateEditResolver}},
  { path: ':id', component: VatPageDetailsComponent, resolve: {VatResolver}},
//   { path: ':id/edit', component: VatPageCreateEditComponent, resolve: {VatCreateEditResolver}},
//   { path: '**', component: VatPageListComponent, resolve: {VatResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatPageRoutingModule { }
