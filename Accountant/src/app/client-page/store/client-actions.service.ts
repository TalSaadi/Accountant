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

    createClient(client: Client): void {
        this.clientStore.updateLoaded(true);
        this.clientService.createClient(client)
        .subscribe(() => {
            this.clientStore.updateClient(client);
            this.router.navigate([`clients/${client.Name}`]);
        }), error => this.router.navigate([`clients`]);
    }

    updateClient(client: Client): void {
        this.clientStore.updateLoaded(true);
        this.clientService.updateClient(client)
        .subscribe(() => {
            this.clientStore.updateClient(client);
            this.router.navigate([`clients/${client.Name}`]);
        }), error => this.router.navigate([`clients`]);
    }

    deleteClient(clientName: string): void {
        this.clientStore.updateLoaded(true);
        this.clientService.deleteClient(clientName)
        .subscribe(() => {
            this.clientStore.updateClient(null);
            this.router.navigate([`clients`]);
        }), error => this.router.navigate([`clients`]);
    }

    updateEditMode(editMode: boolean): void {
        this.clientStore.updateEditMode(editMode);
    }
}