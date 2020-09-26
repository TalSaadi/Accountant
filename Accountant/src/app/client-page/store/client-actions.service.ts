import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Client } from '../../../../../shared/objects/client';
import { ClientService } from '../services/client.service';
import {ClientStore} from './client-store.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ClientActions {
    constructor(private clientService: ClientService,
                private clientStore: ClientStore,
                private router: Router,
                private toastrService: ToastrService) {}

    loadClient(clientId: number): void {
        this.clientStore.updateLoaded(false);
        this.clientService.getClient(clientId)
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
            this.toastrService.success(`Client created successfully`);
            this.router.navigate([`clients/${client.ClientId}`]);
        }), error => {
            this.toastrService.error(`Failed to create client: ${error}`);
            this.router.navigate([`clients`]);
        }
    }

    updateClient(client: Client): void {
        this.clientStore.updateLoaded(true);
        this.clientService.updateClient(client)
        .subscribe(() => {
            this.clientStore.updateClient(client);
            this.toastrService.success(`Client updated successfully`);
            this.router.navigate([`clients/${client.ClientId}`]);
        }), error => {
            this.toastrService.error(`Failed to update client: ${error}`);
            this.router.navigate([`clients`]);
        }
    }

    deleteClient(clientId: number): void {
        this.clientStore.updateLoaded(true);
        this.clientService.deleteClient(clientId)
        .subscribe(() => {
            this.clientStore.updateClient(null);
            this.toastrService.success(`Client deleted successfully`);
            this.router.navigate([`clients`]);
        }), error => {
            this.toastrService.error(`Failed to delete client: ${error}`);
            this.router.navigate([`clients`]);
        }
    }

    updateEditMode(editMode: boolean): void {
        this.clientStore.updateEditMode(editMode);
    }
}