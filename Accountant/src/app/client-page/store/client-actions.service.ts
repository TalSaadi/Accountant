import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Client } from '../../../../../shared/objects/client';
import { ClientService } from '../services/client.service';
import {ClientStore} from './client-store.service';


@Injectable()
export class ClientActions {
    constructor(private clientService: ClientService,
                private clientStore: ClientStore,
                private router: Router) {}

    loadClient(clientName: string): void {
        this.clientStore.updateLoaded(false);
        this.clientService.getClient(clientName)
        .subscribe((client: Client) => {
            this.clientStore.updateClient(client);
        }), error => this.router.navigate([`clients`]);
    }

    loadClients(): void {
        this.clientStore.updateLoaded(false);
        this.clientService.getClients()
        .subscribe((clients: Client[]) => {
            this.clientStore.updateClientList(clients);
        }), error => this.router.navigate([`clients`]);
    }

    updateClient(client: Client): void {
        this.clientStore.updateLoaded(false);
        this.clientService.updateClient(client)
        .subscribe(() => {
        }), error => this.router.navigate([`clients`]);
    }

    deleteClient(clientName: string): void {
        this.clientStore.updateLoaded(false);
        this.clientService.deleteClient(clientName)
        .subscribe(() => {
        }), error => this.router.navigate([`clients`]);
    }
}