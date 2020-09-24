import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-accountant-shared-table',
  templateUrl: './accountant-shared-table.component.html',
  styleUrls: ['./accountant-shared-table.component.scss']
})
export class AccountantSharedTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  private gridApi;
  private gridColumnApi;

  constructor() { }

  @Input() columnDefs = [];

  @Input() rowData = [];

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  getSelectedRows(): RowNode[] {
    return this.agGrid.api.getSelectedNodes();
  }
}
