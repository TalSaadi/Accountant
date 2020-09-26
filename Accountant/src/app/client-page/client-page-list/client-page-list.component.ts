import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientActions } from '../store/client-actions.service';
import { ClientStore } from '../store/client-store.service';

@Component({
  selector: 'app-client-page-list',
  templateUrl: './client-page-list.component.html',
  styleUrls: ['./client-page-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientPageListComponent implements OnInit {

  clients$: Observable<Client[]>;

  columnDefs = [
    {
      field: 'ClientId', sortable: true, width: 100, filter: true, checkboxSelection: true, resizable: true,
      cellRenderer: (ClientId) => `<a href="/clients/${ClientId.value}"> ${ClientId.value}</a>`
    },
    { 
      field: 'Name', sortable: true, filter: true, resizable: true
    },
    { field: 'Age', sortable: true, filter: true, resizable: true},
    { field: 'CompanyName', sortable: true, filter: true, resizable: true},
    { field: 'Address', sortable: true, filter: true, resizable: true},
    { 
      field: 'LastUpdate', sortable: true, filter: true, resizable: true,
      cellRenderer: (lastUpdate) => `<a>${lastUpdate.value} | date </a>`
    }
  ];

  constructor(private clientStore: ClientStore,
              private router: Router) { }

  ngOnInit(): void {
    this.clients$ = this.clientStore.getClientList();
  }

  onCreate(): void {
    this.router.navigate([`clients/create`]);
  }
}
