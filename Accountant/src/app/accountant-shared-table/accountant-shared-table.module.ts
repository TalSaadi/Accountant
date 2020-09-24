import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountantSharedTableComponent } from './accountant-shared-table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AccountantSharedTableComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [AccountantSharedTableComponent]
})
export class AccountantSharedTableModule { }
