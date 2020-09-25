import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Client } from '../../../../../shared/objects/client';
 
export interface ClientState {
    client: Client;
    clientList: Client[];
    isEditMode: boolean;
    loaded: boolean
}

const initialState = {
    client: new Client(),
    clientList: [],
    isEditMode: false,
    loaded: false
}
 
@Injectable()
export class ClientStore extends ComponentStore<ClientState> {
    constructor() {
        super(initialState);
    }
 
    /* Updates */
    updateClient(client: Client) {
        this.setState(state => { return {...state, client: client, loaded: true, isEditMode: true} });
    }

    updateClientList(clientList: Client[]) {
        this.setState(state => { return {...state, clientList: clientList, loaded: true} });
    }

    updateEditMode(editMode: boolean) {
        this.setState(state => { return {...state, isEditMode: editMode}});
    }

    updateLoaded(loaded: boolean) {
        this.setState(state => { return {...state, loaded: loaded} });
    }

    /* Getters */
    getClient(): Observable<Client> {
        return this.select(state => state.client);
    }

    getClientList(): Observable<Client[]> {
        return this.select(state => state.clientList);
    }

    getLoaded(): Observable<boolean> {
        return this.select(state => state.loaded);
    }

    getEditMode(): Observable<boolean> {
        return this.select(state => state.isEditMode);
    }

    /* Values */
    getClientValue(): Client {
        return this.get().client;
    }
}