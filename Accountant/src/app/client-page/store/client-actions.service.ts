import { Injectable } from "@angular/core";
import { Client } from '../../../../../shared/objects/client';
import { ClientService } from './services/tiktok.service';
import {ClientStore} from './client-store.service';


@Injectable()
export class ClientActions {
    constructor(private clientService: ClientService,
                private clientStore: ClientStore) {}

    loadClient(): void {
        this.clientStore.updateLoaded(false);
        this.clientService.getClient()
        .subscribe((client: Client) => {
            this.clientStore.updateClient(client);
        });
    }

    loadClients(): void {
        this.clientStore.updateLoaded(false);
        this.clientService.getClients()
        .subscribe((clients: Client[]) => {
            this.clientStore.updateClientList(clients);
        })
    }
}