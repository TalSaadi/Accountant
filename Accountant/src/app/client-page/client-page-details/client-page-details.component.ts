import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../../../../shared/objects/client';
import { ClientStore } from '../store/client-store.service';

@Component({
  selector: 'app-client-page-details',
  templateUrl: './client-page-details.component.html',
  styleUrls: ['./client-page-details.component.scss']
})
export class ClientPageDetailsComponent implements OnInit {

  client$: Observable<Client>;

  constructor(private clientStore: ClientStore) { }

  ngOnInit(): void {
    this.client$ = this.clientStore.getClient();
  }

}
